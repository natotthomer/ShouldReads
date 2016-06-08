Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "JHhUzaQs0L4RLqs9i37kpplcK", "VIGaKuvCFSlpgYvfcT9lLWDVba9WWlKJy5wSf947OKUi7lmxJj"
    {
      :secure_image_url => 'true',
      :image_size => 'original',
      :authorize_params => {
        :force_login => 'true',
        :lang => 'en'
      }
    }
end
