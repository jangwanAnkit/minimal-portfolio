import { Loader2, Mail, MessageSquare, User, MapPin, Send, Calendar, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ContactInfo } from '../types/portfolio';

const COOLDOWN_PERIOD = 60 * 60 * 1000;

const ContactEnhanced = () => {
    const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
    const [formData, setFormData] = useState({
        firstname: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [cooldownError, setCooldownError] = useState<string | null>(null);

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

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            localStorage.setItem('lastFormSubmission', Date.now().toString());
            setFormData({ firstname: '', email: '', message: '' });
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setCooldownError(null);
    };

    if (!contactInfo) {
        return (
            <section id="contact" className="py-20 pb-32 relative">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto">
                        <div className="animate-shimmer h-12 w-80 mx-auto rounded-lg mb-4"></div>
                        <div className="animate-shimmer h-6 w-96 mx-auto rounded-lg"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 pb-32 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Let's Connect</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing
                        new opportunities and ideas.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Email Card */}
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email me at</p>
                                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                            {contactInfo.email}
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/* Location Card */}
                            {contactInfo.location && (
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">Based in</p>
                                            <p className="text-white font-medium">{contactInfo.location}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Availability Card */}
                            {contactInfo.availability && (
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">Status</p>
                                            <p className="text-emerald-400 font-medium">{contactInfo.availability}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                {showSuccess ? (
                                    <div className="text-center py-8 animate-fade-in-up">
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                                            <Sparkles className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {cooldownError && (
                                            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                                <p className="text-amber-400 text-sm text-center">{cooldownError}</p>
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="firstname" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                                <User className="w-4 h-4" />
                                                <span>Your Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                value={formData.firstname}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                className="input-dark w-full"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                                <Mail className="w-4 h-4" />
                                                <span>Email Address</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                className="input-dark w-full"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
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
                                                className="input-dark w-full resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn btn-primary py-3.5 text-base"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactEnhanced;
