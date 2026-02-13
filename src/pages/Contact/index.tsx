import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, ArrowRight, CheckCircle, AlertCircle, Loader2, XCircle } from 'lucide-react';
import VTLink from '../../components/VTLink';
import { siteContent } from '../../content';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return '请输入您的姓名';
        if (value.trim().length < 2) return '姓名至少2个字符';
        if (value.trim().length > 50) return '姓名不能超过50个字符';
        return undefined;
      case 'phone':
        if (!value.trim()) return '请输入联系电话';
        {
          const phoneRegex = /^1[3-9]\d{9}$/;
          const phoneClean = value.replace(/[\s-]/g, '');
          if (!phoneRegex.test(phoneClean)) return '请输入有效的手机号码';
        }
        return undefined;
      case 'email':
        {
          if (!value.trim()) return undefined;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value.trim())) return '请输入有效的邮箱地址';
        }
        return undefined;
      case 'subject':
        if (!value) return '请选择咨询主题';
        return undefined;
      case 'message':
        if (!value.trim()) return '请输入留言内容';
        if (value.trim().length < 10) return '留言内容至少10个字符';
        if (value.trim().length > 1000) return '留言内容不能超过1000个字符';
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const fieldsToValidate: (keyof FormData)[] = ['name', 'phone', 'subject', 'message'];
    
    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    if (formData.email.trim()) {
      const emailError = validateField('email', formData.email);
      if (emailError) {
        newErrors.email = emailError;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allFields = ['name', 'phone', 'subject', 'message'];
    setTouched(allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
      setErrorMessage('提交失败，请稍后重试或直接电话联系我们');
    }
  };

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: '电话咨询',
      value: siteContent.contact.phone,
      description: '工作日 9:00-18:00',
      action: `tel:${siteContent.contact.phone}`,
    },
    {
      icon: <Mail size={24} />,
      title: '邮箱联系',
      value: siteContent.contact.email,
      description: '24小时内回复',
      action: `mailto:${siteContent.contact.email}`,
    },
    {
      icon: <MessageSquare size={24} />,
      title: '在线留言',
      value: '填写表单',
      description: '我们会尽快联系您',
      action: '#contact-form',
    },
  ];

  const subjects = [
    '解决方案咨询',
    '无人机服务',
    '产品购买',
    '技术支持',
    '商务合作',
    '其他',
  ];

  const getFieldClasses = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-3 rounded-xl bg-surface border text-ink placeholder-muted/50 focus:border-brand-primary/50 focus:outline-none focus:ring-1 transition-all";
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClasses} border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20`;
    }
    return `${baseClasses} border-border focus:ring-brand-primary/30`;
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <Send size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">联系我们</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-ink">期待与您</span>
              <span className="eco-gradient-text">携手合作</span>
            </h1>
            <p className="text-lg md:text-xl text-muted/75 max-w-3xl mx-auto leading-relaxed">
              无论您有任何问题或合作意向，我们都期待您的联系。专业团队将为您提供及时、周到的服务。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12 staggered-grid">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="glass-card p-6 text-center group hover:border-brand-primary/30 transition-all cursor-pointer motion-sheen"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 text-brand-primary group-hover:shadow-glow transition-shadow motion-float">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-1">{method.title}</h3>
                <p className="text-brand-primary font-medium mb-1">{method.value}</p>
                <p className="text-sm text-muted/60">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2" id="contact-form">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                在线留言
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full mb-6" />
              
              {status === 'success' ? (
                <div className="glass-card p-7 text-center motion-sheen">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4 motion-float">
                    <CheckCircle size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">提交成功</h3>
                  <p className="text-muted/75 mb-6">
                    感谢您的留言，我们会尽快与您联系！
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: '',
                      });
                      setTouched({});
                      setErrors({});
                    }}
                    className="btn-secondary"
                  >
                    继续留言
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="glass-card p-7 text-center border-red-500/30 motion-sheen">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4 motion-float">
                    <XCircle size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">提交失败</h3>
                  <p className="text-muted/75 mb-6">
                    {errorMessage}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => {
                        setStatus('idle');
                      }}
                      className="btn-secondary"
                    >
                      重新提交
                    </button>
                    <a href={`tel:${siteContent.contact.phone}`} className="btn-primary inline-flex items-center gap-2">
                      <Phone size={18} />
                      <span>电话咨询</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getFieldClasses('name')}
                        placeholder="您的姓名"
                        disabled={status === 'submitting'}
                        aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                        aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">公司/单位</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={getFieldClasses('company')}
                        placeholder="您的公司或单位"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">电话 *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getFieldClasses('phone')}
                        placeholder="您的联系电话"
                        disabled={status === 'submitting'}
                        aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && touched.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">邮箱</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClasses('email')}
                        placeholder="您的邮箱地址"
                        disabled={status === 'submitting'}
                        aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                        aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted/80 mb-2">咨询主题 *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`${getFieldClasses('subject')} appearance-none cursor-pointer`}
                      disabled={status === 'submitting'}
                      aria-invalid={errors.subject && touched.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                    >
                      <option value="" className="bg-surface">请选择咨询主题</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject} className="bg-surface">
                          {subject}
                        </option>
                      ))}
                    </select>
                    {errors.subject && touched.subject && (
                      <p id="subject-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted/80 mb-2">留言内容 *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      className={`${getFieldClasses('message')} resize-none`}
                      placeholder="请详细描述您的需求或问题..."
                      disabled={status === 'submitting'}
                      aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                      aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    />
                    {errors.message && touched.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-1.5 text-xs text-muted/50 text-right">
                      {formData.message.length}/1000
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <span>提交留言</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                办公地址
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-brand-accent via-warm to-transparent rounded-full mb-6" />
              
              <div className="space-y-5">
                {siteContent.contact.addresses.map((address, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 group hover:border-brand-accent/30 transition-all motion-sheen"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 motion-float">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink mb-1">{address.label}</h3>
                        <p className="text-muted/75 text-sm leading-relaxed">{address.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 glass-card p-6 motion-sheen">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-warm" />
                  <h3 className="text-lg font-semibold text-ink">工作时间</h3>
                </div>
                <div className="space-y-2 text-sm text-muted/75">
                  <p>周一至周五：9:00 - 18:00</p>
                  <p>周六、周日：休息</p>
                  <p>节假日：另行通知</p>
                </div>
              </div>
              
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20 motion-sheen">
                <p className="text-muted/80 text-sm leading-relaxed">
                  <span className="text-ink font-medium">温馨提示：</span>
                  如需无人机飞行服务或现场技术支持，请提前预约，我们将安排专业人员为您提供上门服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquare size={48} className="text-brand-primary mx-auto mb-6 opacity-60 motion-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            让自然保护成为最酷的工作
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            翼界科技期待与您携手，用科技守护绿水青山，共同开创自然保护的美好未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/solutions" className="btn-secondary inline-flex items-center gap-2">
              <span>查看解决方案</span>
            </VTLink>
            <VTLink to="/about" className="btn-secondary inline-flex items-center gap-2">
              <span>了解我们</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
