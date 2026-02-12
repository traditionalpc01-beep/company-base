import highTech900 from './optimized/ejdrone_777bc99262e8_900w.webp';
import highTech1400 from './optimized/ejdrone_777bc99262e8_1400w.webp';
import uavLicense900 from './optimized/ejdrone_9e832e6932c6_900w.webp';
import uavLicense1400 from './optimized/ejdrone_9e832e6932c6_1400w.webp';
import softwareCert900 from './optimized/ejdrone_c38a469924f8_900w.webp';
import softwareCert1400 from './optimized/ejdrone_c38a469924f8_1400w.webp';
import aaaIntegrity900 from './optimized/ejdrone_1a1c813d1136_900w.webp';
import aaaIntegrity1400 from './optimized/ejdrone_1a1c813d1136_1400w.webp';
import aaaCredit900 from './optimized/ejdrone_64d644b1eec0_900w.webp';
import aaaCredit1400 from './optimized/ejdrone_64d644b1eec0_1400w.webp';
import aaaQuality900 from './optimized/ejdrone_bc52f2ac664e_900w.webp';
import aaaQuality1400 from './optimized/ejdrone_bc52f2ac664e_1400w.webp';
import isoEnvZh900 from './optimized/ejdrone_036c024a3d9e_900w.webp';
import isoEnvZh1400 from './optimized/ejdrone_036c024a3d9e_1400w.webp';
import isoOhsEn900 from './optimized/ejdrone_9e2ad84ebd15_900w.webp';
import isoOhsEn1400 from './optimized/ejdrone_9e2ad84ebd15_1400w.webp';
import isoOhsZh900 from './optimized/ejdrone_ac42c8544985_900w.webp';
import isoOhsZh1400 from './optimized/ejdrone_ac42c8544985_1400w.webp';

export type HonorCertificate = {
  id: string;
  title: string;
  description: string;
  image900: string;
  image1400: string;
  sourceUrl: string;
};

export const honorCertificates: HonorCertificate[] = [
  {
    id: 'high-tech-2021',
    title: '国家高新技术企业证书（2021年）',
    description: '国家级高新技术企业认定',
    image900: highTech900,
    image1400: highTech1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/%E9%AB%98%E6%96%B0%E6%8A%80%E6%9C%AF%E4%BC%81%E4%B8%9A%E8%AF%81%E4%B9%A6%EF%BC%882021%E5%B9%B4.png',
  },
  {
    id: 'uav-business-license',
    title: '民用无人驾驶航空器经营许可证',
    description: '民航局颁发的经营许可资质',
    image900: uavLicense900,
    image1400: uavLicense1400,
    sourceUrl: 'https://media.ejdrone.com/about-us/honor/%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%BB%8F%E8%90%A5%E8%AE%B8%E5%8F%AF%E8%AF%81.png',
  },
  {
    id: 'software-product-certificate',
    title: '软件产品证书（保护地导览软件 V1.00）',
    description: '软件产品评估与备案',
    image900: softwareCert900,
    image1400: softwareCert1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/%E8%BD%AF%E4%BB%B6%E4%BA%A7%E5%93%81%E8%AF%81%E4%B9%A6--%E4%BF%9D%E6%8A%A4%E5%9C%B0%E5%AF%BC%E8%A7%88%E8%BD%AF%E4%BB%B6V1.00.jpg',
  },
  {
    id: 'aaa-integrity',
    title: '3A 诚信经营示范单位',
    description: '企业诚信与规范经营能力认证',
    image900: aaaIntegrity900,
    image1400: aaaIntegrity1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/3A%E8%AF%9A%E4%BF%A1%E7%BB%8F%E8%90%A5%E7%A4%BA%E8%8C%83%E5%8D%95%E4%BD%8D.jpg',
  },
  {
    id: 'aaa-credit',
    title: '3A 信用等级证书',
    description: '企业信用综合评价认证',
    image900: aaaCredit900,
    image1400: aaaCredit1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/3A%E4%BF%A1%E7%94%A8%E7%AD%89%E7%BA%A7%E8%AF%81%E4%B9%A6.jpg',
  },
  {
    id: 'aaa-quality',
    title: '3A 质量服务信誉证书',
    description: '质量服务与信誉体系认证',
    image900: aaaQuality900,
    image1400: aaaQuality1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/3A%E8%B4%A8%E9%87%8F%E6%9C%8D%E5%8A%A1%E4%BF%A1%E8%AA%89%E8%AF%81%E4%B9%A6.jpg',
  },
  {
    id: 'iso-env-zh',
    title: 'ISO 环境管理体系认证证书（中文）',
    description: '环境管理体系认证',
    image900: isoEnvZh900,
    image1400: isoEnvZh1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/ISO%E7%8E%AF%E5%A2%83%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81%E8%AF%81%E4%B9%A6%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.jpg',
  },
  {
    id: 'iso-ohs-en',
    title: 'ISO 职业健康安全管理体系认证证书（英文）',
    description: '职业健康安全管理体系认证',
    image900: isoOhsEn900,
    image1400: isoOhsEn1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/ISO%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81%E8%AF%81%E4%B9%A6%EF%BC%88%E8%8B%B1%E6%96%87%EF%BC%89.jpg',
  },
  {
    id: 'iso-ohs-zh',
    title: 'ISO 职业健康安全管理体系认证证书（中文）',
    description: '职业健康安全管理体系认证',
    image900: isoOhsZh900,
    image1400: isoOhsZh1400,
    sourceUrl:
      'https://media.ejdrone.com/about-us/honor/ISO%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81%E8%AF%81%E4%B9%A6%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.jpg',
  },
];

