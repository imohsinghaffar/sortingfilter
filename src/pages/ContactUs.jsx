import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react"

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Have questions about our products or need assistance? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of the following channels. Our team is here to help you with any questions
                  or concerns.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-indigo-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">support@trendvault.com</p>
                    <p className="text-gray-600">sales@trendvault.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-indigo-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-indigo-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Commerce Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-indigo-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <button className="bg-indigo-900 hover:bg-indigo-800 text-white p-3 rounded-lg transition-colors">
                    <span className="sr-only">Facebook</span>
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </button>
                  <button className="bg-indigo-900 hover:bg-indigo-800 text-white p-3 rounded-lg transition-colors">
                    <span className="sr-only">Twitter</span>
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </button>
                  <button className="bg-indigo-900 hover:bg-indigo-800 text-white p-3 rounded-lg transition-colors">
                    <span className="sr-only">Instagram</span>
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </button>
                  <button className="bg-indigo-900 hover:bg-indigo-800 text-white p-3 rounded-lg transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </button>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-vertical"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 w-4 h-4 text-indigo-900 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    I would like to receive updates and promotional emails from MyStore
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">We typically respond within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-10 rounded-lg overflow-hidden shadow-md">
      <iframe
        width="450"
        height="250"
        title="Würzburg, Germany Map"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10624.266261238604!2d9.9387!3d49.7913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479fef8c3bb21b6b%3A0x42065c312e7c6ac!2sW%C3%BCrzburg%2C%20Germany!5e0!3m2!1sen!2sde!4v1719509298343!5m2!1sen!2sde"
      ></iframe>
    </div>
    </div>
  )
}

export default ContactUs
