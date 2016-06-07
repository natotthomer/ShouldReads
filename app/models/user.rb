class User < ActiveRecord::Base

  attr_reader :password

  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :shelves
  has_many :books,
    through: :shelves
  has_many :readings
  has_many :book_readings,
    through: :readings,
    source: :book

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

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def want_to_read
    self.readings.where(status: "want to read")
  end

  def read
    self.readings.where(status: "read")
  end

  def currently_reading
    self.readings.where(status: "currently reading")
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
