class User < ActiveRecord::Base

  attr_reader :password

  validate :has_password_digest_or_twitter_uid
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :shelves
  has_many :books,
    through: :shelves
  has_many :readings
  has_many :read_books,
    through: :readings,
    source: :book
  has_many :book_readings,
    through: :readings,
    source: :book

  def has_password_digest_or_twitter_uid
    if (!password_digest && !twitter_uid)
      errors[:messages] = "must have either password digest or twitter uid"
    end
  end

  def User.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    return user if user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    loop do
      token = SecureRandom::urlsafe_base64

      return token unless User.where(session_token: token).exists?
    end
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(twitter_uid: auth_hash[:uid])

    if user.nil?
      user = User.create!(
        twitter_uid: auth_hash[:uid],
        username: auth_hash[:info][:name]
      )
    end

    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def want_to_read
    self.readings.where(status: "Want to Read")
  end

  def read
    self.readings.where(status: "Read")
  end

  def currently_reading
    self.readings.where(status: "Currently Reading")
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
