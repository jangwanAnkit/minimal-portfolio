import { Loader2, Mail, MessageSquare, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ContactInfo } from '../types/portfolio';

const COOLDOWN_PERIOD = 60 * 60 * 1000;

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cooldownError, setCooldownError] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    fetch('/data/contact.json')
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(err => console.error('Failed to load contact info:', err));
  }, []);

  const canSubmitForm = () => {
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (!lastSubmission) return true;
    
    const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
    if (timeSinceLastSubmission <= COOLDOWN_PERIOD) {
      const timeLeft = Math.ceil((COOLDOWN_PERIOD - timeSinceLastSubmission) / (60 * 1000));
      setCooldownError(`Please wait ${timeLeft} minutes before submitting another message.`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!canSubmitForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setIsFormVisible(false);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      localStorage.setItem('lastFormSubmission', Date.now().toString());
      setFormData({ firstname: '', email: '', message: '' });
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setIsFormVisible(true);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsFormVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setCooldownError(null);
  };

  useEffect(() => {
    if (cooldownError) {
      const timer = setTimeout(() => setCooldownError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [cooldownError]);

  if (!contactInfo) {
    return (
      <section id="contact" className="py-20 pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded max-w-lg mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 pb-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-500">
              Have a question or want to work together? Drop me a message!
            </p>
            <p className="mt-2 text-sm text-gray-500">
              For urgent inquiries, you can email me directly at{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-indigo-600 hover:text-indigo-500"
                aria-label="Send email directly"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>

          {cooldownError && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md animate-fade-in">
              <p className="text-yellow-700 text-center">
                {cooldownError}
              </p>
            </div>
          )}

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md animate-scale-up">
              <p className="text-green-700 text-center">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            </div>
          )}

          <form 
            id="portfolio-contact-form" 
            onSubmit={handleSubmit} 
            className={`space-y-6 transition-all duration-300 ease-in-out ${
              isFormVisible ? 'opacity-100 transform translate-y-0' : 
              'opacity-0 transform -translate-y-4'
            }`}
          >
            <div>
              <label htmlFor="firstname" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4" />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;