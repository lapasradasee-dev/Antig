/**
 * Portfolio Website Interactive Script
 * Author: นางสาวลภัสรดา สีทอง (Lapatsrada Seethong)
 * Department: เทคโนโลยีธุรกิจดิจิทัล วิทยาลัยอาชีวศึกษานครศรีธรรมราช
 */

// ==========================================
// 1. Project Case Study Data Store
// ==========================================
const projectsData = {
  web: {
    title: {
      th: 'โปรเจกต์พัฒนาเว็บไซต์ธุรกิจและพาณิชย์ดิจิทัล (Web Business & E-Commerce Platform)',
      en: 'Digital Business & Web Commerce Platform Project'
    },
    tag: {
      th: 'เว็บไซต์ & ธุรกิจดิจิทัล',
      en: 'Web & Digital Business'
    },
    icon: '💻',
    content: {
      th: `
        <div class="modal-section-title">📌 ที่มาและความสำคัญของโครงงาน</div>
        <p class="modal-text">
          ในยุคเศรษฐกิจดิจิทัล เว็บไซต์ถือเป็นหัวใจสำคัญในการสร้างความน่าเชื่อถือ ขยายช่องทางการจำหน่ายสินค้า และเข้าถึงลูกค้าได้ตลอด 24 ชั่วโมง โครงงานนี้จัดทำขึ้นเพื่อพัฒนาเว็บไซต์ธุรกิจที่สามารถนำเสนอแคตตาล็อกสินค้าออนไลน์ รองรับการแสดงผลทุกหน้าจออย่างมีประสิทธิภาพ และผสานแนวคิดการตลาดดิจิทัลเพื่อเพิ่มยอดขายให้กับธุรกิจ
        </p>

        <div class="modal-section-title">⚙️ องค์ประกอบและการทำงานของระบบ (Key Features)</div>
        <ul class="modal-list">
          <li><strong>Responsive Web Architecture:</strong> จัดวางเลย์เอาต์ด้วย HTML5 และ CSS Grid/Flexbox รองรับทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์อย่างลื่นไหล</li>
          <li><strong>Digital Catalog & Product Showcase:</strong> ระบบจัดแสดงสินค้าแยกตามหมวดหมู่ พร้อมรูปภาพคมชัด รายละเอียดราคา และปุ่มติดต่อสั่งซื้อ</li>
          <li><strong>UI/UX Design for Business:</strong> ออกแบบโทนสีและโครงสร้างที่เน้นความสะอาด สบายตา (Clean & Friendly) ให้อ่านง่ายและใช้งานสะดวก</li>
          <li><strong>Graphic & Banner Assets:</strong> สร้างสรรค์สื่อภาพแบนเนอร์ ป้ายโปรโมตสินค้า และไอคอนด้วย Canva Pro และ Adobe Photoshop</li>
        </ul>

        <div class="modal-section-title">🌟 ผลลัพธ์และคุณประโยชน์ที่ได้รับ</div>
        <ul class="modal-list">
          <li>ยกระดับภาพลักษณ์ของธุรกิจให้ดูเป็นมืออาชีพและทันสมัยตามมาตรฐานธุรกิจดิจิทัล</li>
          <li>เพิ่มความสะดวกให้ลูกค้าสามารถเข้ามาเลือกดูแคตตาล็อกสินค้าได้ทุกที่ ทุกเวลา</li>
          <li>บูรณาการทักษะการออกแบบกราฟิก การเขียนโค้ดเว็บไซต์ และการวิเคราะห์การตลาดดิจิทัลเข้าด้วยกันอย่างเป็นรูปธรรม</li>
        </ul>
      `,
      en: `
        <div class="modal-section-title">📌 Project Overview & Objectives</div>
        <p class="modal-text">
          In the digital economy, a well-crafted business website is crucial for building customer trust and expanding commercial reach. This project develops an online web commerce platform featuring responsive design, digital product catalogs, and optimized user experience to boost engagement and conversions.
        </p>

        <div class="modal-section-title">⚙️ Architecture & Technical Features</div>
        <ul class="modal-list">
          <li><strong>Responsive Web Design:</strong> Built with semantic HTML5 and modern CSS to deliver seamless experiences across desktop and mobile devices.</li>
          <li><strong>Interactive Product Catalog:</strong> Categorized merchandise presentation with high-resolution visual cards and inquiry mechanisms.</li>
          <li><strong>Digital Graphic Media:</strong> Custom branded promotional banners and UI assets created using Canva Pro and Photoshop.</li>
        </ul>

        <div class="modal-section-title">🌟 Measurable Benefits & Outcomes</div>
        <ul class="modal-list">
          <li>Created a modern, credible digital storefront accessible 24/7.</li>
          <li>Enhanced user experience, leading to higher engagement and streamlined communication.</li>
          <li>Successfully demonstrated proficiency across web technologies and digital marketing practices.</li>
        </ul>
      `
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'UI/UX Design', 'Canva Pro', 'Photoshop']
  },

  clothesline: {
    title: {
      th: 'โปรเจกต์ราวตากผ้าอัตโนมัติด้วยเซนเซอร์วัดฝน (Smart Rain-Sensing Clothesline)',
      en: 'Smart Rain-Sensing Automatic Clothes Drying Rack Project'
    },
    tag: {
      th: 'IoT & นวัตกรรมสิ่งประดิษฐ์',
      en: 'IoT & Automation Innovation'
    },
    icon: '🌦️',
    content: {
      th: `
        <div class="modal-section-title">📌 ที่มาและปัญหาของโครงงาน (The Problem & Concept)</div>
        <p class="modal-text">
          ปัญหาผ้าเปียกฝนเมื่อผู้อยู่อาศัยไม่อยู่บ้าน หรือสภาพอากาศแปรปรวนในภาคใต้ เป็นปัญหาในชีวิตประจำวันของหลายครัวเรือน คณะผู้จัดทำจึงได้คิดค้นและประดิษฐ์ <strong>"ราวตากผ้าอัตโนมัติด้วยเซนเซอร์วัดฝน"</strong> ในช่วงการศึกษาระดับ ปวช./ปวส. โดยนำระบบสมองกลฝังตัวและเซนเซอร์มาช่วยเก็บและกางราวตากผ้าโดยอัตโนมัติ
        </p>

        <div class="modal-section-title">🔧 อุปกรณ์และหลักการทำงานของระบบ (How It Works)</div>
        <ul class="modal-list">
          <li><strong>Raindrop Sensor (เซนเซอร์ตรวจจับหยดน้ำฝน):</strong> ตรวจวัดละอองหรือหยดน้ำฝนแบบ Real-Time เมื่อมีหยดน้ำตกกระทบแผงเซนเซอร์ สัญญาณแรงดันไฟฟ้าจะเปลี่ยนไปและส่งค่าไปยังไมโครคอนโทรลเลอร์ทันที</li>
          <li><strong>Microcontroller Control Unit:</strong> ประมวลผลสัญญาณจากเซนเซอร์ หากพบว่าฝนเริ่มตก จะสั่งการวงจรขับมอเตอร์ให้หมุนดึงราวผ้าเลื่อนกลับเข้าใต้ชายคาหรือที่ร่ม</li>
          <li><strong>DC Motor & Mechanical Rail:</strong> ชุดมอเตอร์ไฟฟ้ากระแสตรงพร้อมระบบรอกและรางเลื่อน ขับเคลื่อนราวตากผ้าอย่างนุ่มนวลและมั่นคง</li>
          <li><strong>Limit Switches (สวิตช์จำกัดระยะ):</strong> ตัดการทำงานของมอเตอร์เมื่อราวตากผ้าเคลื่อนที่ไปถึงตำแหน่งสุดทางเข้าหรือออก เพื่อความปลอดภัยและป้องกันมอเตอร์เสียหาย</li>
          <li><strong>Manual Override Switch:</strong> มีสวิตช์ควบคุมแบบแมนนวลให้ผู้ใช้งานสามารถกดสั่งเลื่อนเก็บหรือเลื่อนกางได้ตามต้องการแม้ไม่มีฝน</li>
        </ul>

        <div class="modal-section-title">🌟 ประโยชน์และผลการทดสอบโครงงาน</div>
        <ul class="modal-list">
          <li>ระบบสามารถตรวจจับหยดน้ำฝนและสั่งเก็บราวตากผ้าเข้าที่ร่มได้ภายในเวลาไม่เกิน 5-8 วินาทีหลังฝนเริ่มตก</li>
          <li>ช่วยลดความกังวลของผู้อยู่อาศัย ป้องกันผ้าเปียกชื้น และลดการเกิดกลิ่นอับของเสื้อผ้า</li>
          <li>ได้รับคำชมเชยในการนำเสนอโครงงานนวัตกรรมสิ่งประดิษฐ์ด้านความคิดสร้างสรรค์และการประยุกต์ใช้เทคโนโลยีแก้ปัญหาจริง</li>
        </ul>
      `,
      en: `
        <div class="modal-section-title">📌 Background & Practical Problem</div>
        <p class="modal-text">
          Unpredictable rain showers frequently ruin laundry when residents are away from home. To address this everyday challenge, this project engineered a <strong>Smart Rain-Sensing Automatic Clothes Drying Rack</strong> leveraging embedded microcontrollers and IoT moisture sensors.
        </p>

        <div class="modal-section-title">🔧 Hardware Architecture & Mechanics</div>
        <ul class="modal-list">
          <li><strong>Raindrop Sensor Board:</strong> Continuously monitors precipitation droplets via resistance changes and signals the controller immediately.</li>
          <li><strong>Microcontroller Core:</strong> Evaluates sensor data and triggers the reversible motor drive circuit upon detecting rain.</li>
          <li><strong>Reversible DC Motor & Rail Mechanism:</strong> Smoothly retracts the drying rack under sheltered roof overhangs.</li>
          <li><strong>Safety Limit Switches:</strong> Automatically cut off motor power when the rack reaches travel endpoints.</li>
          <li><strong>Manual Override Option:</strong> Allows users to manually extend or retract the rack on demand.</li>
        </ul>

        <div class="modal-section-title">🌟 Testing & Value Created</div>
        <ul class="modal-list">
          <li>System responds and successfully secures garments within 5 to 8 seconds of rain onset.</li>
          <li>Eliminates clothing damage and odors caused by rain re-wetting.</li>
          <li>Awarded recognition for practical engineering, usability, and everyday utility.</li>
        </ul>
      `
    },
    tech: ['Raindrop Sensor', 'Microcontroller', 'DC Motor Driver', 'Limit Switch', 'Mechanical Rig', 'Embedded C / IoT']
  }
};

// ==========================================
// 2. Bilingual Dictionary (TH / EN)
// ==========================================
const i18nDictionary = {
  th: {
    navCover: 'หน้าปก',
    navAbout: 'ประวัติส่วนตัว',
    navSkills: 'ทักษะความสามารถ',
    navProjects: 'ผลงานเด่น',
    navContact: 'ติดต่อกลับ',
    btnPrint: 'พิมพ์ / PDF',
    coverPageTag: 'หน้า 1: แฟ้มสะสมผลงาน (COVER PAGE)',
    heroSubLabel: 'แฟ้มสะสมผลงานวิชาการและวิชาชีพ',
    heroName: 'นางสาวลภัสรดา สีทอง',
    heroDegree: 'นักศึกษาระดับปริญญาตรี ปีที่ 1',
    heroDept: 'สาขา/แผนกวิชา: เทคโนโลยีธุรกิจดิจิทัล',
    heroCollege: 'วิทยาลัยอาชีวศึกษานครศรีธรรมราช',
    btnHeroProjects: 'สำรวจผลงานเด่น',
    btnHeroAbout: 'ประวัติส่วนตัว & การศึกษา',
    btnHeroContact: 'ติดต่อกลับ',
    badgeYearLabel: 'ระดับการศึกษา',
    badgeYearVal: 'ปริญญาตรี ปีที่ 1',
    badgePhoneLabel: 'เบอร์โทรศัพท์',
    badgeEmailLabel: 'อีเมลสถาบัน',
    aboutBadge: 'หน้า 2: ประวัติส่วนตัว (ABOUT ME)',
    aboutTitleMain: 'ข้อมูลส่วนตัวและ',
    aboutTitleSky: 'เป้าหมายในอนาคต',
    aboutSubtitle: 'ประวัติการศึกษา ข้อมูลการติดต่อ และความมุ่งมั่นสู่การเติบโตในสายงานเทคโนโลยีธุรกิจดิจิทัล',
    personalDetailsTitle: 'ข้อมูลส่วนตัว (Personal Details)',
    infoFullNameLabel: 'ชื่อ - นามสกุล',
    infoFullNameVal: 'นางสาวลภัสรดา สีทอง (Lapatsrada Seethong)',
    infoEduCurrentLabel: 'การศึกษาปัจจุบัน',
    infoEduCurrentVal: 'ปริญญาตรี ปีที่ 1 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล<br>วิทยาลัยอาชีวศึกษานครศรีธรรมราช',
    infoPhoneLabel: 'เบอร์โทรศัพท์ติดต่อ',
    infoEmailLabel: 'อีเมลติดต่อ',
    careerGoalTag: 'เป้าหมายในอนาคต (CAREER GOAL)',
    careerGoalQuote: 'มีความมุ่งมั่นที่จะนำความรู้ด้านเทคโนโลยีดิจิทัลและการบริหารจัดการมาประยุกต์ใช้ เพื่อเติบโตไปเป็น นักธุรกิจด้านคอมพิวเตอร์ ที่สามารถสร้างสรรค์นวัตกรรมและโซลูชันใหม่ๆ ตอบโจทย์ยุคดิจิทัล',
    eduTimelineTitle: 'ประวัติการศึกษา (Education)',
    stepStatusCurrent: 'ระดับปัจจุบัน',
    stepStatusGrad: 'สำเร็จการศึกษา',
    eduStep1Title: 'ระดับปริญญาตรี (ปีที่ 1)',
    eduStep1Inst: 'แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยอาชีวศึกษานครศรีธรรมราช',
    eduStep1Note: 'ศึกษาการประยุกต์ใช้เทคโนโลยีดิจิทัลขั้นสูง การบริหารจัดการธุรกิจดิจิทัล พาณิชย์อิเล็กทรอนิกส์ และการจัดการข้อมูลเชิงธุรกิจ',
    eduStep2Title: 'ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)',
    eduStep2Inst: 'วิทยาลัยอาชีวศึกษานครศรีธรรมราช',
    eduStep2Note: 'มุ่งเน้นความเชี่ยวชาญด้านเทคโนโลยีธุรกิจ คอมพิวเตอร์ธุรกิจ และการพัฒนาโครงการนวัตกรรม',
    eduStep3Title: 'ระดับประกาศนียบัตรวิชาชีพ (ปวช.)',
    eduStep3Inst: 'วิทยาลัยอาชีวศึกษานครศรีธรรมราช',
    eduStep3Note: 'สร้างรากฐานด้านคอมพิวเตอร์และธุรกิจสารสนเทศ การทำงานร่วมกับฮาร์ดแวร์และซอฟต์แวร์',
    eduStep4Title: 'ระดับมัธยมศึกษาตอนต้น',
    eduStep4Inst: 'โรงเรียนเมืองนครศรีธรรมราช',
    eduStep4Note: 'การศึกษาขั้นพื้นฐาน สร้างเสริมทักษะทางวิชาการและกิจกรรมพัฒนาผู้เรียน',
    skillsBadge: 'หน้า 3: ทักษะและความสนใจ (SKILLS & INTERESTS)',
    skillsTitleMain: 'ทักษะความเชี่ยวชาญ &',
    skillsTitleSky: 'ศักยภาพการทำงาน',
    skillsSubtitle: 'บูรณาการทักษะด้านเทคโนโลยีสารสนเทศ ธุรกิจดิจิทัล และทักษะการทำงานร่วมกับผู้อื่นอย่างมืออาชีพ',
    hardSkillsTitle: 'ทักษะด้านเทคโนโลยีและธุรกิจ (Hard Skills)',
    skill1Name: 'การออกแบบสื่อดิจิทัลและกราฟิกเบื้องต้น (Canva / Photoshop)',
    skill2Name: 'การจัดการข้อมูลและระบบสารสนเทศ',
    skill3Name: 'การใช้งานโปรแกรมสำนักงานและสื่อการนำเสนอ',
    skill4Name: 'การเข้าใจพื้นฐานธุรกิจและการตลาดดิจิทัล',
    softSkillsTitle: 'ทักษะการทำงาน (Soft Skills)',
    soft1Title: 'การสื่อสารและการประสานงาน',
    soft1Desc: 'มีความสามารถในการถ่ายทอดข้อมูลอย่างชัดเจน ประสานงานระหว่างบุคคลและองค์กรได้อย่างราบรื่น มีมนุษยสัมพันธ์ที่ดี และพร้อมรับฟังความคิดเห็นเพื่อการทำงานเป็นทีมที่มีประสิทธิภาพ',
    soft2Title: 'ความคิดสร้างสรรค์และการแก้ปัญหา',
    soft2Desc: 'มุ่งเน้นการคิดนอกกรอบ ออกแบบไอเดียและโซลูชันใหม่ๆ ทางเทคโนโลยีเพื่อแก้ปัญหาทางธุรกิจ พร้อมวิเคราะห์สถานการณ์อย่างเป็นระบบและปรับเปลี่ยนกลยุทธ์ได้อย่างทันท่วงที',
    soft3Title: 'การเรียนรู้เทคโนโลยีใหม่ๆ อย่างรวดเร็ว',
    soft3Desc: 'มีทัศนคติแบบเติบโต (Growth Mindset) มีความกระตือรือร้นในการศึกษาเครื่องมือ ซอฟต์แวร์ แพลตฟอร์ม และเทคโนโลยีดิจิทัลยุคใหม่อยู่เสมอ พร้อมนำมาปรับใช้ในการทำงานได้ทันที',
    projectsBadge: 'หน้า 4: ผลงานหลักและโครงการ (FEATURED PROJECTS)',
    projectsTitleMain: 'ผลงานเด่น &',
    projectsTitleSky: 'โครงงานนวัตกรรม',
    projectsSubtitle: 'ผลงานชิ้นสำคัญที่แสดงถึงการนำความรู้ด้านเทคโนโลยี เว็บไซต์ และนวัตกรรมอัจฉริยะมาสร้างประโยชน์ได้จริง',
    proj1Title: 'โปรเจกต์พัฒนาเว็บไซต์ธุรกิจและพาณิชย์ดิจิทัล',
    proj1Desc: 'การพัฒนาเว็บไซต์ธุรกิจเพื่อส่งเสริมการค้าออนไลน์และการประชาสัมพันธ์แบรนด์ ออกแบบโครงสร้างเว็บไซต์ตามหลัก UI/UX สะอาดตา ใช้งานง่าย รองรับการแสดงผลทุกหน้าจอ (Responsive Web Design) พร้อมระบบแคตตาล็อกสินค้าออนไลน์ และการเชื่อมโยงระบบการตลาดดิจิทัล',
    proj1FeatTitle: 'จุดเด่นสำคัญของโครงงาน',
    proj1Feat1: 'ระบบ Responsive Web Design ใช้งานได้สมบูรณ์ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์',
    proj1Feat2: 'ระบบแสดงรายการสินค้าและแคตตาล็อกดิจิทัล ช่วยเพิ่มโอกาสในการขาย',
    proj1Feat3: 'จัดทำสื่อภาพและแบนเนอร์สินค้าด้วย Canva & Photoshop สวยงามระดับมืออาชีพ',
    proj2Title: 'โปรเจกต์ราวตากผ้าอัตโนมัติด้วยเซนเซอร์วัดฝน',
    proj2Desc: 'นวัตกรรมสิ่งประดิษฐ์ระบบอัจฉริยะ (IoT / Embedded Systems) ช่วงระดับ ปวช./ปวส. ออกแบบเพื่อแก้ปัญหาผ้าเปียกฝนเมื่อไม่มีคนอยู่บ้าน โดยใช้เซนเซอร์ตรวจจับหยดน้ำฝน (Raindrop Sensor) ทำงานร่วมกับชุดควบคุมมอเตอร์ดึงราวตากผ้าเก็บเข้าที่ร่มโดยอัตโนมัติเมื่อฝนตก และเลื่อนออกรับแดดเมื่อฝนหยุดตก',
    proj2FeatTitle: 'จุดเด่นสำคัญของโครงงาน',
    proj2Feat1: 'ตรวจจับละอองและหยดน้ำฝนได้ทันทีแบบ Real-Time ด้วย Raindrop Sensor',
    proj2Feat2: 'ควบคุมมอเตอร์เลื่อนราวผ้าเข้าที่ร่มและเลื่อนออกได้อย่างแม่นยำ พร้อมระบบจำกัดระยะ (Limit Switch)',
    proj2Feat3: 'มีไฟสถานะ LED และสวิตช์ Manual Override เพื่อความปลอดภัยสูงสุด',
    btnViewProjectDetail: 'ดูรายละเอียดโครงงานฉบับเต็ม',
    contactBadge: 'หน้า 7: ข้อมูลติดต่อกลับ (CONTACT PAGE)',
    thankYouText: 'ขอบคุณสำหรับการรับชมและพิจารณาแฟ้มสะสมผลงาน (PORTFOLIO)<br>ยินดีและพร้อมรับโอกาสในการร่วมงาน ฝึกงาน และสร้างสรรค์นวัตกรรมดิจิทัลค่ะ',
    chPhoneLabel: 'เบอร์โทรศัพท์ (Tel)',
    chEmailLabel: 'อีเมล (E-mail)',
    chInstLabel: 'สถานศึกษา (Institution)',
    btnPrintPortfolio: 'พิมพ์หรือบันทึกพอร์ตโฟลิโอ (Save as PDF)',
    formTitle: 'ส่งข้อความติดต่อกลับ',
    formSub: 'กรอกข้อมูลและข้อความด้านล่างเพื่อติดต่อหรือส่งข้อเสนอ',
    lblFormName: 'ชื่อ - นามสกุล หรือชื่อหน่วยงาน *',
    lblFormEmail: 'อีเมล หรือ เบอร์โทรศัพท์ติดต่อกลับ *',
    lblFormSubject: 'หัวข้อการติดต่อ *',
    lblFormMessage: 'รายละเอียดข้อความ *',
    btnSendMsg: 'ส่งข้อความติดต่อ'
  },
  en: {
    navCover: 'Cover Page',
    navAbout: 'About Me',
    navSkills: 'Skills & Tech',
    navProjects: 'Projects',
    navContact: 'Contact',
    btnPrint: 'Print / PDF',
    coverPageTag: 'PAGE 1: PORTFOLIO COVER',
    heroSubLabel: 'Academic & Professional Portfolio',
    heroName: 'Ms. Lapatsrada Seethong',
    heroDegree: "1st Year Bachelor's Degree Student",
    heroDept: 'Field: Digital Business Technology',
    heroCollege: 'Nakhon Si Thammarat Vocational College',
    btnHeroProjects: 'Explore Featured Projects',
    btnHeroAbout: 'About Me & Education',
    btnHeroContact: 'Get In Touch',
    badgeYearLabel: 'Current Level',
    badgeYearVal: "Bachelor's Year 1",
    badgePhoneLabel: 'Phone Number',
    badgeEmailLabel: 'College Email',
    aboutBadge: 'PAGE 2: ABOUT ME & EDUCATION',
    aboutTitleMain: 'Personal Details & ',
    aboutTitleSky: 'Career Ambitions',
    aboutSubtitle: 'Educational background, contact information, and career vision in digital business technology.',
    personalDetailsTitle: 'Personal Details',
    infoFullNameLabel: 'Full Name',
    infoFullNameVal: 'Ms. Lapatsrada Seethong',
    infoEduCurrentLabel: 'Current Education',
    infoEduCurrentVal: "1st Year Bachelor's Degree in Digital Business Technology<br>Nakhon Si Thammarat Vocational College",
    infoPhoneLabel: 'Telephone Number',
    infoEmailLabel: 'Email Address',
    careerGoalTag: 'FUTURE CAREER GOAL',
    careerGoalQuote: 'Determined to apply knowledge in digital technology and modern business management to grow into a computer business entrepreneur who creates innovative solutions for the digital era.',
    eduTimelineTitle: 'Education Timeline',
    stepStatusCurrent: 'Currently Studying',
    stepStatusGrad: 'Graduated',
    eduStep1Title: "Bachelor's Degree (Year 1)",
    eduStep1Inst: 'Digital Business Technology, Nakhon Si Thammarat Vocational College',
    eduStep1Note: 'Studying advanced digital business applications, e-commerce systems, and data management.',
    eduStep2Title: 'High Vocational Certificate (Dip. / ปวส.)',
    eduStep2Inst: 'Nakhon Si Thammarat Vocational College',
    eduStep2Note: 'Specialized in business technology, computer systems, and innovation project development.',
    eduStep3Title: 'Vocational Certificate (ปวช.)',
    eduStep3Inst: 'Nakhon Si Thammarat Vocational College',
    eduStep3Note: 'Built fundamental proficiency in business computer applications and basic hardware.',
    eduStep4Title: 'Lower Secondary Education (มัธยมศึกษาตอนต้น)',
    eduStep4Inst: 'Muang Nakhon Si Thammarat School',
    eduStep4Note: 'General education with foundational academic and technological skills.',
    skillsBadge: 'PAGE 3: SKILLS & CAPABILITIES',
    skillsTitleMain: 'Technical Proficiency & ',
    skillsTitleSky: 'Professional Skills',
    skillsSubtitle: 'Blending IT, business analytics, and creative teamwork capabilities.',
    hardSkillsTitle: 'Technology & Business Skills (Hard Skills)',
    skill1Name: 'Digital Media & Graphic Design (Canva / Photoshop)',
    skill2Name: 'Data Management & Information Systems',
    skill3Name: 'Office Software & Professional Presentations',
    skill4Name: 'Digital Business & Online Marketing Fundamentals',
    softSkillsTitle: 'Professional Work Skills (Soft Skills)',
    soft1Title: 'Communication & Coordination',
    soft1Desc: 'Skilled in articulate communication, seamless cross-functional team coordination, and collaborative problem solving.',
    soft2Title: 'Creative Thinking & Problem Solving',
    soft2Desc: 'Focus on innovative, out-of-the-box thinking to solve business and technological bottlenecks systematically.',
    soft3Title: 'Fast Technology Learner',
    soft3Desc: 'Growth mindset with strong enthusiasm to adapt to new software, digital platforms, and emerging technologies.',
    projectsBadge: 'PAGE 4: FEATURED PROJECTS',
    projectsTitleMain: 'Highlighted Projects & ',
    projectsTitleSky: 'Innovations',
    projectsSubtitle: 'Real-world projects demonstrating applied web business and smart embedded IoT solutions.',
    proj1Title: 'Digital Business & Web Commerce Platform Project',
    proj1Desc: 'Developed a modern, responsive web application for commercial presentation, featuring clean UI/UX, structured catalog browsing, and digital marketing alignment.',
    proj1FeatTitle: 'Key Project Highlights',
    proj1Feat1: 'Fully responsive web design across mobile, tablet, and desktop viewports.',
    proj1Feat2: 'Structured digital product catalog boosting sales readiness.',
    proj1Feat3: 'Professional graphic assets and banners crafted with Canva Pro & Photoshop.',
    proj2Title: 'Smart Rain-Sensing Automatic Clothes Drying Rack',
    proj2Desc: 'An IoT smart home innovation developed during vocational studies that utilizes raindrop sensors and motor drives to automatically retract laundry under shelter when rain begins and re-extend when sunlight returns.',
    proj2FeatTitle: 'Key Project Highlights',
    proj2Feat1: 'Real-time rainfall detection through precision raindrop sensor circuitry.',
    proj2Feat2: 'Safe and smooth DC motor rack drive with limit-switch boundaries.',
    proj2Feat3: 'LED status indicators and manual override toggle for maximum safety.',
    btnViewProjectDetail: 'View Full Project Case Study',
    contactBadge: 'PAGE 7: CONTACT DETAILS',
    thankYouText: 'Thank you for reviewing my Portfolio.<br>Ready and excited for collaborative opportunities, internships, and digital innovation projects!',
    chPhoneLabel: 'Phone (Tel)',
    chEmailLabel: 'Email',
    chInstLabel: 'Institution',
    btnPrintPortfolio: 'Print / Save Portfolio as PDF',
    formTitle: 'Send a Message',
    formSub: 'Fill in your inquiry or collaboration proposal below',
    lblFormName: 'Your Name or Organization *',
    lblFormEmail: 'Email or Contact Phone *',
    lblFormSubject: 'Subject *',
    lblFormMessage: 'Your Message *',
    btnSendMsg: 'Submit Message'
  }
};

let currentLanguage = 'th';

// ==========================================
// 3. Typing Text Simulator
// ==========================================
const typingPhrases = {
  th: [
    'มุ่งมั่นสู่การเป็นนักธุรกิจด้านคอมพิวเตอร์และดิจิทัล',
    'นักศึกษาระดับปริญญาตรี ปีที่ 1 • เทคโนโลยีธุรกิจดิจิทัล',
    'วิทยาลัยอาชีวศึกษานครศรีธรรมราช',
    'พัฒนาเว็บไซต์ ออกแบบกราฟิก และนวัตกรรมอัจฉริยะ',
    'ยินดีและพร้อมรับโอกาสในการร่วมงานและฝึกงานค่ะ'
  ],
  en: [
    'Aspiring Computer & Digital Business Entrepreneur',
    "1st Year Bachelor's in Digital Business Technology",
    'Nakhon Si Thammarat Vocational College',
    'Web Development, Graphic Design & IoT Innovations',
    'Open to internships and collaboration opportunities'
  ]
};

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingTimeout = null;

function typeSimulator() {
  const targetElement = document.getElementById('typing-text');
  if (!targetElement) return;

  const phrases = typingPhrases[currentLanguage] || typingPhrases.th;
  const currentPhrase = phrases[phraseIdx % phrases.length];

  if (isDeleting) {
    targetElement.textContent = currentPhrase.substring(0, charIdx - 1);
    charIdx--;
  } else {
    targetElement.textContent = currentPhrase.substring(0, charIdx + 1);
    charIdx++;
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIdx === currentPhrase.length) {
    delay = 2200; // Pause at full phrase
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx++;
    delay = 500; // Pause before next phrase
  }

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(typeSimulator, delay);
}

// ==========================================
// 4. Language Switcher Logic
// ==========================================
function switchLanguage(lang) {
  if (lang !== 'th' && lang !== 'en') return;
  currentLanguage = lang;

  // Update toggle buttons active class
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update text nodes with data-i18n
  const dict = i18nDictionary[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Reset typing simulator with new language
  charIdx = 0;
  isDeleting = false;
  phraseIdx = 0;
  clearTimeout(typingTimeout);
  typeSimulator();

  showToast(lang === 'th' ? 'เปลี่ยนภาษาเป็น: ภาษาไทย' : 'Language switched to: English');
}

// ==========================================
// 5. Interactive Project Case Study Modal
// ==========================================
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const container = document.getElementById('modal-project-content');
  const data = projectsData[projectId];

  if (!modal || !container || !data) return;

  const title = data.title[currentLanguage] || data.title.th;
  const tag = data.tag[currentLanguage] || data.tag.th;
  const bodyContent = data.content[currentLanguage] || data.content.th;

  let techPillsHtml = '';
  if (Array.isArray(data.tech)) {
    techPillsHtml = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join(' ');
  }

  container.innerHTML = `
    <div class="modal-header-banner">
      <div style="display:inline-flex; align-items:center; gap:8px; background:#FFFFFF; padding:4px 12px; border-radius:9999px; font-size:0.8rem; font-weight:700; color:var(--accent-blue); margin-bottom:12px;">
        <span>${data.icon}</span>
        <span>${tag}</span>
      </div>
      <h3 class="modal-project-title">${title}</h3>
      <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:12px;">
        ${techPillsHtml}
      </div>
    </div>
    <div class="modal-body-content">
      ${bodyContent}
      <div style="margin-top:28px; text-align:right;">
        <button class="btn btn-navy" onclick="closeProjectModal()" style="padding:10px 22px;">
          ${currentLanguage === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleBackdropClick(e) {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
}

// Close on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// ==========================================
// 6. Copy to Clipboard with Toast Notification
// ==========================================
function copyText(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || 'คัดลอกข้อมูลสำเร็จ');
  }).catch(() => {
    // Fallback
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(successMsg || 'คัดลอกข้อมูลสำเร็จ');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================
// 7. Navbar Scroll & Active Link Detection
// ==========================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar style on scroll
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Highlight current nav menu item
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================
// 8. Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking on nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 9. Contact Form Submission Handler
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const name = nameInput ? nameInput.value : 'คุณ';

    showToast(
      currentLanguage === 'th'
        ? `ขอบคุณ ${name} สำหรับข้อความ! ทางเราได้รับข้อมูลแล้วค่ะ`
        : `Thank you, ${name}! Your message has been received.`
    );

    form.reset();
  });
}

// ==========================================
// 10. Initialization on DOM Loaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Start typing simulator
  typeSimulator();

  // Language buttons event
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // Initialize components
  initNavbarScroll();
  initMobileMenu();
  initContactForm();

  console.log('Portfolio initialized successfully for นางสาวลภัสรดา สีทอง (Lapatsrada Seethong)');
});
