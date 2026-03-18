import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  Lightbulb, 
  Megaphone, 
  MonitorPlay, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Download
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};



export default function App() {
  const [activeBusiness, setActiveBusiness] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const businessAreas = [
    {
      title: 'BRAND',
      points: ['브랜드 컨셉에 맞는 채널 운영', '브랜드 컨설팅을 통한 전략 방향 제시']
    },
    {
      title: 'DISPLAY AD',
      points: ['최적의 미디어 선정', '크리에이티브 기획 및 분석', '고객 친화적인 보고와 유연성']
    },
    {
      title: 'SEARCH AD',
      points: ['축적된 경험과 전문성', '충분한 시간 투자와 관심', '빠른 대응과 피드백']
    },
    {
      title: 'NAVER PLACE',
      points: ['노출에서 제일 많은 분량', '지역기반검색의 제일 상위에 위치']
    },
    {
      title: 'BRAND BLOG',
      points: ['브랜드의 전문성', '세부키워드 노출']
    },
    {
      title: 'CONTENTS',
      points: ['풍부한 레퍼런스와 진행 사례', '2D, 3D, 드로잉까지 모든 형태 소화', '제작부터 마케팅까지 원스톱 진행']
    },
    {
      title: 'WEB DESIGN',
      points: ['분석·기획·구축까지 원스톱 진행', '디바이스 환경에 따른 디자인 최적화', '철저한 사후 관리와 유지보수']
    },
    {
      title: 'VIRAL',
      points: ['결국은 콘텐츠 싸움', '신뢰도 있는 제안과 결과 보고', '철저한 후속 대응과 위기관리']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div 
          className={`absolute inset-0 bg-black/60 border-b border-white/10 transition-transform duration-500 ease-in-out ${
            isScrolled ? 'translate-y-0' : '-translate-y-full'
          }`} 
        />
        <div className="relative w-full px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer">
              <img src="/곰5.png" alt="Gom ad Logo" className="h-8 md:h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <div className="hidden md:flex gap-6">
                <button className="flex items-center gap-1 text-[14px] font-medium text-white hover:text-orange-500 transition-colors">
                  회사소개서 <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-7 lg:space-x-10">
              <a href="#about" className="text-[14px] text-gray-300 hover:text-orange-500 font-medium transition-colors">About</a>
              <a href="#services" className="text-[14px] text-gray-300 hover:text-orange-500 font-medium transition-colors">Services</a>
              <a href="#business" className="text-[14px] text-gray-300 hover:text-orange-500 font-medium transition-colors">Business</a>
              <a href="#portfolio" className="text-[14px] text-gray-300 hover:text-orange-500 font-medium transition-colors">Work</a>
              <a href="https://litt.ly/gom_ads" target="_blank" rel="noopener noreferrer" className="text-[14px] text-gray-300 hover:text-orange-500 font-medium transition-colors">Contact</a>
              <a href="https://litt.ly/gom_ads" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-orange-500 text-black hover:text-white px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 inline-block">
                프로젝트 문의
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-80"
          >
            {/* 메인 배경 영상 */}
            <source src="/Gom.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black z-0" />
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full bg-black/60 border-y border-white/10 py-12 md:py-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <div className="text-left md:-translate-x-12">
                <p className="text-2xl md:text-4xl lg:text-5xl text-white leading-tight font-bold tracking-tight drop-shadow-2xl">
                  <span className="font-black">조회수 1000만</span>의 증명<br />
                  <span className="font-black">곰애드</span>가 하면 <span className="font-black">다릅니다</span>
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="https://litt.ly/gom_ads" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-orange-500 text-black hover:text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-2xl">
                  무료 컨설팅 받기
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl z-0 opacity-30 pointer-events-none"></div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                왜 수많은 기업들이<br />
                <span className="text-orange-500">Gom ad</span>를 선택할까요?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                단순히 광고를 대신 틀어주는 대행사가 아닙니다. 우리는 파트너사의 비즈니스 성장을 우리 자신의 목표처럼 여기며, 끝까지 책임지고 결과를 만들어냅니다.
              </p>
              
              <div className="space-y-6">
                {[
                  "업계 최고 수준의 퍼포먼스 마케터 배정",
                  "트렌드를 선도하는 자체 크리에이티브 팀 보유",
                  "계약기간 내 목표 KPI 95% 이상 달성"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team working" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-black text-white mb-1">100%</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider">성공률 지향</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-orange-500 mb-1">24/7</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider">실시간 피드백</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white mb-1">48H</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider">기획-실행 법칙</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">곰 애드는?</h2>
            <p className="text-lg text-gray-400">기획부터 실행까지 48시간 이내. 시장의 반응에 누구보다 빠르게 대응합니다.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Megaphone className="w-8 h-8 text-orange-500" />, title: "초정밀 타겟 점유", desc: "예산을 낭비하지 않고 수익이 날 곳만 송곳처럼 파고듭니다.", bgImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
              { icon: <Lightbulb className="w-8 h-8 text-orange-500" />, title: "생존형 브랜딩 설계", desc: "예쁜 디자인을 넘어, 시장에서 선택받고 살아남는 '팔리는 정체성'을 만듭니다.", bgImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
              { icon: <MonitorPlay className="w-8 h-8 text-orange-500" />, title: "시선 강탈 콘텐츠", desc: "스크롤을 멈추게 하고, 지갑을 열게 만드는 본능적인 이미지를 기획합니다.", bgImg: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop" },
              { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, title: "실시간 성장 인사이트", desc: "단순히 숫자 보고에 그치지 않고, 다음 매출을 올릴 '답'을 찾아냅니다.", bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-zinc-900/80 p-8 rounded-3xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 border border-white/10 hover:border-orange-500/50 group relative overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-luminosity"
                  style={{
                    backgroundImage: `url(${service.bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent z-0" />
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section id="business" className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white tracking-tight"
              >
                BUSINESS
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-orange-500 font-medium mt-2"
              >
                비즈니스 본질에만 집중하십시오. 실행은 곰 애드가 책임집니다.
              </motion.p>
            </div>
          </div>

          {/* Overlapping Circles */}
          <div className="w-full overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-nowrap justify-start xl:justify-center items-center py-10 min-w-max px-8 mx-auto"
            >
              {businessAreas.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveBusiness(index)}
                  className={`
                    relative flex-shrink-0 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-center p-2 md:p-4 cursor-pointer transition-all duration-500 border
                    ${activeBusiness === index 
                      ? 'bg-orange-500 text-white z-20 scale-110 shadow-[0_0_40px_rgba(249,115,22,0.4)] border-orange-400' 
                      : 'bg-black text-gray-400 border-white/10 hover:bg-zinc-900 hover:text-gray-200 z-10'}
                    ${index !== 0 ? '-ml-4 md:-ml-8 lg:-ml-10' : ''}
                  `}
                >
                  <span className={`font-black tracking-wider ${activeBusiness === index ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Content Display Area */}
          <motion.div
            key={activeBusiness}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 max-w-3xl mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-black text-orange-500 mb-8 text-center">
              {businessAreas[activeBusiness].title}
            </h3>
            <ul className="space-y-5 max-w-xl mx-auto">
              {businessAreas[activeBusiness].points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-200 text-lg md:text-xl">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio/Cases Section */}
      <section id="portfolio" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">성공 사례</h2>
              <p className="text-lg text-gray-400">Gom ad가 만들어낸 놀라운 변화들</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", client: "A 병원", title: "신환 구조 전환", result: "신환 200명 달성" },
              { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", client: "B 어플 스타트업", title: "신규 유저 유입구조 변화", result: "신규 유저 500%유입 증가" },
              { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop", client: "C 인테리어 스타트업", title: "포지셔닝 변환", result: "수익률 250% 증가" },
              { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", client: "D 부동산 스타트업", title: "브랜딩으로 수익구조 전환", result: "업계 최고 성장률" },
              { img: "/유짓수1.PNG", client: "유짓수", title: "유튜브 채널 성장 전략", result: "콘텐츠로 판매량 급등" },
              { img: "/유짓수2.png", client: "유짓수", title: "콘텐츠 바이럴 마케팅", result: "콘텐츠로 판매량 급등" },
              { img: "/애니멀봐1.PNG", client: "애니멀봐", title: "조회수 1000만은 만들어 본 사람이 또 만듭니다", result: "1000만 조회수 달성", featured: true }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer relative ${item.featured ? 'scale-105 z-10' : ''}`}
              >
                <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 ${item.featured ? 'ring-4 ring-orange-500 ring-offset-4 ring-offset-zinc-900 shadow-[0_0_30px_rgba(249,115,22,0.3)]' : ''}`}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold border ${item.featured ? 'bg-orange-500 text-white border-orange-400' : 'bg-black/80 text-white border-white/10'}`}>
                    {item.result}
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-tighter shadow-xl">
                      BEST CASE
                    </div>
                  )}
                </div>
                <div className={`text-sm font-bold mb-2 ${item.featured ? 'text-white' : 'text-orange-500'}`}>{item.client}</div>
                <h3 className={`font-bold group-hover:text-orange-500 transition-colors ${item.featured ? 'text-2xl text-orange-500' : 'text-xl text-white'}`}>{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            이제, 당신의 브랜드가<br />성장할 차례입니다.
          </h2>
          <p className="text-orange-100 text-xl mb-10">
            지금 바로 Gom ad의 마케팅 전문가와 무료로 상담해보세요.
          </p>
          <a 
            href="https://litt.ly/gom_ads" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1"
          >
            프로젝트 문의하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-12">
            <div className="flex-shrink-0 md:w-1/3">
              <div className="mb-4">
                <img src="/곰5.png" alt="Gom ad Logo" className="h-32 md:h-40 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="text-gray-400 font-medium tracking-wide ml-2">Small Beginnings, Great Endings.</p>
            </div>
            
            <div className="flex-grow flex flex-col md:flex-row gap-12 md:gap-24 pt-4">
              <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>ingompunch@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span>010-2556-5746</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                    <span>인천광역시 중구 자연대로 29 15층</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6">Social</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2026 Gom ad. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
