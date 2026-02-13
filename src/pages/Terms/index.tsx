import React from 'react';
import { FileText } from 'lucide-react';
import { siteContent } from '../../content';

const Terms = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <FileText size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">使用条款</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">网站</span>
              <span className="eco-gradient-text">使用条款</span>
            </h1>
            <p className="text-muted/75 text-lg leading-relaxed">
              本页面用于说明本网站的使用规则与免责声明。继续使用即视为同意以下条款。
            </p>
          </div>

          <div className="feature-card space-y-8 leading-relaxed text-muted/75 motion-sheen">
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">一、信息声明</div>
              <div>
                本网站展示的内容用于介绍翼界科技的产品、解决方案与服务能力。我们将尽力保证信息准确，但不对因信息更新滞后造成的误差承担责任。
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">二、知识产权</div>
              <div>
                本网站的文字、图片、标识、版式与程序等内容均受相关法律保护。未经授权，不得以任何形式复制、转载、修改或用于商业用途。
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">三、第三方链接</div>
              <div>
                本网站可能包含第三方网站链接，仅为提供便利。第三方网站的内容与隐私政策不受本网站控制，请用户自行判断与承担风险。
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-ink/90 mb-2">四、联系我们</div>
              <div>
                如对条款有疑问或需行使相关权利，请联系：{siteContent.contact.email} / {siteContent.contact.phone}。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
