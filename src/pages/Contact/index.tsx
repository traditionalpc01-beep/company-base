import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import VTLink from '../../components/VTLink';
import { siteContent } from '../../content';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: '电话咨询',
      value: siteContent.contact.phone,
      description: '工作日 9:00-18:00',
    },
    {
      icon: <Mail size={24} />,
      title: '邮箱联系',
      value: siteContent.contact.email,
      description: '24小时内回复',
    },
    {
      icon: <MessageSquare size={24} />,
      title: '在线留言',
      value: '填写表单',
      description: '我们会尽快联系您',
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

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:border-brand-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 text-brand-primary group-hover:shadow-glow transition-shadow">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-1">{method.title}</h3>
                <p className="text-brand-primary font-medium mb-1">{method.value}</p>
                <p className="text-sm text-muted/60">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                在线留言
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full mb-8" />
              
              {isSubmitted ? (
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">提交成功</h3>
                  <p className="text-muted/75 mb-6">
                    感谢您的留言，我们会尽快与您联系！
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="btn-secondary"
                  >
                    继续留言
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-ink placeholder-muted/50 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">公司/单位</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-ink placeholder-muted/50 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all"
                        placeholder="您的公司或单位"
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
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-ink placeholder-muted/50 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all"
                        placeholder="您的联系电话"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted/80 mb-2">邮箱</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-ink placeholder-muted/50 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all"
                        placeholder="您的邮箱地址"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted/80 mb-2">咨询主题 *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-ink focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-surface">请选择咨询主题</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject} className="bg-surface">
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted/80 mb-2">留言内容 *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-ink placeholder-muted/50 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all resize-none"
                      placeholder="请详细描述您的需求或问题..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    <span>提交留言</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                办公地址
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-brand-accent via-warm to-transparent rounded-full mb-8" />
              
              <div className="space-y-6">
                {siteContent.contact.addresses.map((address, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 group hover:border-brand-accent/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
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
              
              <div className="mt-8 glass-card p-6">
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
              
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20">
                <p className="text-muted/80 text-sm leading-relaxed">
                  <span className="text-ink font-medium">温馨提示：</span>
                  如需无人机飞行服务或现场技术支持，请提前预约，我们将安排专业人员为您提供上门服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquare size={48} className="text-brand-primary mx-auto mb-6 opacity-60" />
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
