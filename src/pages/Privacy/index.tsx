import React from 'react';
import { Shield } from 'lucide-react';
import { siteContent } from '../../content';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
              <Shield size={16} className="text-brand-accent" />
              <span className="text-sm text-muted/80">隐私政策</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">隐私</span>
              <span className="tech-gradient-text">保护</span>
            </h1>
            <p className="text-muted/75 text-lg leading-relaxed">
              我们重视并保护用户隐私。本页面说明在你访问本网站时，我们可能收集与使用的信息以及你的权利。
            </p>
          </div>

          <div className="feature-card space-y-8 leading-relaxed text-muted/75 motion-sheen">
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">一、我们可能收集的信息</div>
              <ul className="list-disc pl-5 space-y-2">
                <li>访问日志：浏览器类型、系统版本、访问时间、页面路径、IP 等用于安全与统计的信息。</li>
                <li>表单信息：当你在"联系我们"等页面提交信息时，我们会收集你主动提供的联系方式与需求描述。</li>
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">二、信息使用目的</div>
              <ul className="list-disc pl-5 space-y-2">
                <li>提供与改进网站服务与用户体验。</li>
                <li>安全防护与故障排查。</li>
                <li>与用户沟通需求、提供资料与报价。</li>
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">三、信息共享与披露</div>
              <div>
                我们不会出售你的个人信息。除法律法规要求或在你授权同意的情况下，我们不会向第三方披露你的个人信息。
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">四、你的权利</div>
              <div>
                你有权查询、更正、删除你提交的个人信息，或撤回相关授权。你也可以通过联系我们行使隐私权利。
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">五、联系我们</div>
              <div>
                如对隐私政策有疑问、意见或建议，请通过 {siteContent.contact.email} 或 {siteContent.contact.phone} 联系我们。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
