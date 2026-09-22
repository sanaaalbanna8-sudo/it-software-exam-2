(() => {
  // بعد Deploy لـ Apps Script الصقي رابط الـ Web app هنا:
  const SHEETS_ENDPOINT = "";

  const BANK = [
    // ——— مراجعة عامة (7) ———
    {
      section: "general",
      tag: "مراجعة عامة · نظام التشغيل",
      scene: "الطالب ثبّت Word وChrome، لكن بلا نظام تشغيل الجهاز لا يشغّل هذه البرامج.",
      ask: "ما الدور الأساسي لنظام التشغيل (OS)؟",
      type: "mcq",
      choices: [
        "يربط العتاد Hardware بالبرامج Software",
        "ينجز مهمة المستخدم النهائي مثل الرسم أو المحاسبة",
        "يضغط الصور فقط قبل إرسالها بالبريد",
        "يستبدل الحاجة لأي Application software"
      ],
      answer: 0,
      why: "نظام التشغيل أساس يمكّن البرامج المثبتة من العمل: واجهة بين Hardware و Software."
    },
    {
      section: "general",
      tag: "مراجعة عامة · أنواع OS",
      scene: "مستشفى يزرع منظم ضربات قلب (pacemaker). أي تأخير في الاستجابة قد يهدد حياة المريض.",
      ask: "أي نوع نظام تشغيل الأنسب هنا؟",
      type: "mcq",
      choices: [
        "Real time (RTOS) · الزمن الحقيقي",
        "Multitasking · single-user",
        "Multi-user",
        "Single-task · single-user"
      ],
      answer: 0,
      why: "عندما يكون التأخير خطرًا على السلامة نختار Real time (RTOS): معالجة فورية بلا تأخير ملحوظ."
    },
    {
      section: "general",
      tag: "مراجعة عامة · أنواع OS",
      scene: "غسالة ملابس ذكية: برنامجها داخل الجهاز، وظيفتها ثابتة، ولا تحتاج Windows كامل.",
      ask: "هذا مثال على أي نوع؟",
      type: "mcq",
      choices: [
        "Multi-user",
        "Embedded · مدمج",
        "Command line OS",
        "Open source office"
      ],
      answer: 1,
      why: "Embedded = برنامج داخل العتاد للتحكم بجهاز محدد بوظيفة ثابتة (غسالة، تلفاز، pacemaker…)."
    },
    {
      section: "general",
      tag: "مراجعة عامة · مقارنة",
      scene: "سارة تستخدم هاتفها وحدها: واتساب + خرائط + يوتيوب معًا. أحمد وزملاؤه يعدّلون ملف Google Sheets واحد من أجهزة مختلفة.",
      ask: "ما الفرق الصحيح؟",
      type: "mcq",
      choices: [
        "الاثنان Multi-user لأن في تطبيقات كثيرة",
        "سارة: Multitasking · single-user · أحمد وفريقه: Multi-user",
        "سارة: Single-task · أحمد: Embedded",
        "لا فرق — الاثنان نفس نوع نظام التشغيل"
      ],
      answer: 1,
      why: "المفتاح عدد المستخدمين على نفس المورد: سارة وحدها بعدة تطبيقات؛ الفريق يشارك موردًا واحدًا (سحابة/خادم)."
    },
    {
      section: "general",
      tag: "مراجعة عامة · الواجهات",
      scene: "عند الصراف الآلي تظهر قائمة: سحب · رصيد · تحويل · خروج. نفس الفكرة في الميكروويف وآلة التذاكر.",
      ask: "هذا نوع الواجهة…",
      type: "mcq",
      choices: [
        "Command line (CLI)",
        "Menu-based",
        "Multi-user OS",
        "RAW file interface"
      ],
      answer: 1,
      why: "Menu-based: وظائف عبر قائمة جاهزة — شائعة في ATM والطابعات وآلات التذاكر والتلفاز."
    },
    {
      section: "general",
      tag: "مراجعة عامة · الواجهات",
      scene: "طفل يستخدم الجهاز لأول مرة: ينقر أيقونات ويفتح نوافذ بالفأرة بلا كتابة أوامر.",
      ask: "الواجهة الأنسب؟",
      type: "mcq",
      choices: [
        "Command line (CLI)",
        "Graphical (GUI)",
        "Real time OS",
        "Hex editor"
      ],
      answer: 1,
      why: "GUI سهلة للمستخدم الجديد: نوافذ وأيقونات وقوائم ومؤشر — بلا برمجة."
    },
    {
      section: "general",
      tag: "مراجعة عامة · صح / خطأ",
      scene: "مقارنة بين واجهة رسومية مليئة بالأيقونات والنوافذ، وسطر أوامر نصي على جهاز ضعيف المواصفات.",
      ask: "صح أم خطأ: الواجهة الرسومية GUI غالبًا تزيد المتطلبات على التخزين والأداء مقارنةً بـ CLI أو Menu-based.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 0,
      why: "من الدرس: GUI تستهلك موارد أكثر؛ CLI وMenu-based أخف نسبيًا."
    },
    // ——— تركيز: بعد سؤال النقاش (23) ———
    {
      section: "cli",
      tag: "تركيز · ليش CLI؟",
      scene: "طالب يسأل بعد سؤال النقاش: «طالما عندنا GUI سهلة… ليش لسا بنتعلّم Command line؟»",
      ask: "أي جواب الأدق حسب الدرس؟",
      type: "mcq",
      choices: [
        "لأن CLI أسرع في بعض المهام، مفيد للطوارئ، ويساعد على فهم كيف يشتغل الجهاز",
        "لأن GUI لم تعد تعمل على الأجهزة الحديثة",
        "لأن CLI بديل يومي دائم عن كل الأيقونات ويجب هجر GUI",
        "لأن الطلاب ممنوع يستخدموا الواجهة الرسومية في المدرسة"
      ],
      answer: 0,
      why: "الخلاصة: GUI للسهولة اليومية · CLI للتحكم السريع، الإنقاذ، وفهم النظام من الداخل."
    },
    {
      section: "cli",
      tag: "تركيز · ليش CLI؟",
      scene: "اللابتوب علّق والواجهة الرسومية لا تفتح (أو ظهرت شاشة زرقاء). الفني ما زال يصل لنافذة أوامر نصية.",
      ask: "ليش الـ terminal مهم في هذه الحالة؟",
      type: "mcq",
      choices: [
        "لأنه غالبًا آخر باب للوصول والإصلاح عندما تتعطّل GUI",
        "لأنه الوحيد القادر على تشغيل الألعاب",
        "لأنه يضغط الصور تلقائيًا",
        "لأنه يستبدل الحاجة لنظام التشغيل"
      ],
      answer: 0,
      why: "حالات الطوارئ: GUI تعطّلت؟ الشبكة مقطوعة؟ الـ terminal غالبًا آخر باب للإصلاح."
    },
    {
      section: "cli",
      tag: "تركيز · أوامر CMD",
      scene: "الطالب فتح cmd ويريد معرفة عنوان IP لجهازه على الشبكة.",
      ask: "أي أمر يستخدم؟",
      type: "mcq",
      choices: [
        "ipconfig",
        "color a",
        "echo Hello",
        "cls"
      ],
      answer: 0,
      why: "ipconfig يعرض إعدادات الشبكة وعنوان IP. التفاصيل أكثر: ipconfig /all."
    },
    {
      section: "cli",
      tag: "تركيز · أوامر CMD",
      scene: "في الدرس: مستكشف الملفات في GUI يقابله أوامر في CMD لعرض المجلدات والانتقال بينها.",
      ask: "أي زوج أوامر هو المقابل الأقرب لمستكشف الملفات؟",
      type: "mcq",
      choices: [
        "dir و cd",
        "ping و nslookup",
        "color و ver",
        "whoami و hostname فقط بلا استعراض ملفات"
      ],
      answer: 0,
      why: "dir يعرض محتويات المجلد الحالي، وcd للانتقال (مثل cd Desktop) — نفس فكرة مستكشف الملفات."
    },
    {
      section: "cli",
      tag: "تركيز · صح / خطأ",
      scene: "الطالب كتب في CMD: ping 8.8.8.8",
      ask: "صح أم خطأ: هذا الأمر يختبر هل الإنترنت يصل للجهاز.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 0,
      why: "ping 8.8.8.8 يرسل إشارات لخادم Google العام لمعرفة إن كانت الشبكة تصل. ping localhost يختبر الجهاز نفسه."
    },
    {
      section: "cli",
      tag: "تركيز · صح / خطأ",
      scene: "قاعدة الصف في نشاط CMD: أوامر قراءة واستعلام فقط.",
      ask: "صح أم خطأ: مسموح في النشاط حذف ملفات أو تغيير إعدادات الشبكة من CMD.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "ممنوع: حذف ملفات، تغيير إعدادات الشبكة، أو أوامر تؤثر على أجهزة الآخرين. النشاط للقراءة فقط."
    },
    {
      section: "cli",
      tag: "تركيز · صح / خطأ",
      scene: "طالب يقول: «بما إن CLI أقوى، لازم نترك GUI تمامًا ونستخدم الأوامر لكل شيء يوميًا.»",
      ask: "صح أم خطأ: CLI بديل يومي دائم عن الواجهة الرسومية لكل المستخدمين.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "CLI مش بديل يومي دائمًا؛ هو أداة سرعة وطوارئ وفهم. GUI تبقى للسهولة اليومية."
    },
    {
      section: "performance",
      tag: "تركيز · أداء نظام التشغيل",
      scene: "جهاز يشغّل بث فيديو بدقة عالية مع تحرير فيديو في نفس الوقت، وجهاز آخر يفتح جداول ومستندات إدارية بسيطة.",
      ask: "أي عامل أداء يظهر بوضوح هنا؟",
      type: "mcq",
      choices: [
        "Amount of data being processed · كمية البيانات المعالجة",
        "نوع الخط في الواجهة فقط",
        "أن الاثنين Embedded بالضرورة",
        "امتداد الملف RTF فقط"
      ],
      answer: 0,
      why: "بث فيديو + تحرير أثقل بكثير من مستندات إدارية بسيطة — كمية البيانات المعالجة تؤثر في أداء OS."
    },
    {
      section: "performance",
      tag: "تركيز · أداء نظام التشغيل",
      scene: "فتح الطالب 15 تطبيقًا مع فيديوهات كثيرة، فصار اللابتوب بطيئًا جدًا.",
      ask: "التفسير الأدق حسب الدرس؟",
      type: "mcq",
      choices: [
        "كلّما زاد multitasking زاد الضغط على memory و CPU — الموارد محدودة",
        "نظام التشغيل تعطّل نهائيًا ولا يُصلح",
        "لأن الواجهة كانت Menu-based",
        "لأن الجهاز يجب أن يكون Embedded"
      ],
      answer: 0,
      why: "Number of applications + Hardware specifications: الذاكرة وقوة المعالجة محدودة."
    },
    {
      section: "performance",
      tag: "تركيز · أداء نظام التشغيل",
      scene: "تطبيق يعمل على أجهزة Apple ولا يعمل على Android، ففريق التسويق لا يستطيع توحيده.",
      ask: "هذا يرتبط بأي عامل؟",
      type: "mcq",
      choices: [
        "Compatibility with other systems · التوافق مع الأنظمة الأخرى",
        "Real time OS فقط",
        "ضغط JPEG",
        "Adapter UI للألوان"
      ],
      answer: 0,
      why: "بعض البرامج لا تعمل على كل OS — التوافق (مثل اختلاف Apple و Android) يؤثر في الاستخدام والأداء المؤسسي."
    },
    {
      section: "utility",
      tag: "تركيز · Utility software",
      scene: "برامج تعمل مع نظام التشغيل لمهام روتينية: حماية، صيانة، تحسين الأداء.",
      ask: "ماذا نسمي هذه الفئة؟",
      type: "mcq",
      choices: [
        "Utility software · برامج الأداة المساعدة",
        "Application software فقط مثل Word",
        "Enterprise resource packages",
        "File type JPEG"
      ],
      answer: 0,
      why: "Utility تصون النظام وتحسّن أداءه: Antivirus، Backup، Drivers، Compression…"
    },
    {
      section: "utility",
      tag: "تركيز · صح / خطأ",
      scene: "طالب ثبّت ثلاثة برامج Antivirus معًا «عشان الحماية تصير أقوى».",
      ask: "صح أم خطأ: تثبيت عدة برامج antivirus معًا يحسّن الحماية دائمًا وبلا مشاكل.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "من الدرس: احذر تعارض عدة antivirus، ونقص memory أو bandwidth. الكثرة هنا قد تضر."
    },
    {
      section: "utility",
      tag: "تركيز · Utility × Application",
      scene: "موظفة تكتب تقريرًا في Microsoft Word، وزميلها يشغّل أداة تنظيف القرص وضغط الملفات.",
      ask: "التصنيف الصحيح؟",
      type: "mcq",
      choices: [
        "Word = Application · تنظيف القرص/الضغط = Utility",
        "الاثنان Utility لأنهما على نفس الجهاز",
        "Word = Operating system",
        "تنظيف القرص = Application مثل CAD"
      ],
      answer: 0,
      why: "Application ينجز مهمة المستخدم النهائي (التقرير). Utility يصون النظام ويحسّن أداءه."
    },

    {
      section: "apps",
      tag: "تركيز · Application software",
      scene: "شركة تربط الشراء والمبيعات والمخزون والمحاسبة في حزمة واحدة متكاملة.",
      ask: "هذا مثال على…",
      type: "mcq",
      choices: [
        "Enterprise resource packages (ERP)",
        "Device drivers",
        "Disk defragmenter",
        "Menu-based ATM"
      ],
      answer: 0,
      why: "ERP حزم موارد المؤسسات: شراء، مبيعات، مخزون، محاسبة متكاملة."
    },
    {
      section: "apps",
      tag: "تركيز · اختيار التطبيقات",
      scene: "استوديو تصميم يفضّل أدوات معينة لأن الموظفين مدربون عليها، والصناعة الإبداعية معتادة عليها (مثل Apple في creative industries).",
      ask: "أي عوامل اختيار ظهرت هنا؟",
      type: "mcq",
      choices: [
        "سهولة الاستخدام · مهارات الموظفين · طبيعة الصناعة · التوافق",
        "ضرورة استخدام RTOS في كل الاستوديوهات",
        "منع المصدر المفتوح دائمًا",
        "اعتماد JPEG فقط لكل الملفات"
      ],
      answer: 0,
      why: "عوامل اختيار Application: سهولة الاستخدام، interoperability، مهارات الموظفين، والصناعة."
    },

    {
      section: "licence",
      tag: "تركيز · Open source",
      scene: "برنامج تعاوني، يمكن نسخه وتكييفه، وغالبًا بلا رسوم شراء، مع مراجعة من الأقران.",
      ask: "هذا يصف…",
      type: "mcq",
      choices: [
        "Open source · المصدر المفتوح",
        "Proprietary فقط",
        "Embedded OS بالضرورة",
        "JPEG lossy compression"
      ],
      answer: 0,
      why: "Open source: تعاوني، peer review، مجاني غالبًا، قابل للنسخ والتكييف — مع الحاجة للتحقق من المصدر."
    },
    {
      section: "licence",
      tag: "تركيز · Proprietary",
      scene: "الشركة المالكة لا تسمح بتعديل الشفرة المصدرية؛ تبيع حق الاستخدام وتقدّم تصحيحات من المطوّر.",
      ask: "هذا يصف…",
      type: "mcq",
      choices: [
        "Proprietary · برمجيات مملوكة",
        "Open source دائمًا",
        "Utility antivirus فقط",
        "Menu-based microwave"
      ],
      answer: 0,
      why: "Proprietary ملك الشركة، سري، يُشترى للاستخدام لا لتعديل source code. قد يكون مكلفًا."
    },
    {
      section: "licence",
      tag: "تركيز · صح / خطأ",
      scene: "طالب يقول: «المصدر المفتوح ظاهر للجميع إذن هو آمن 100% ولا يحتاج فحص المصدر.»",
      ask: "صح أم خطأ: Open source آمن دائمًا بلا أي خطر.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "يوجد خطر تعديل خبيث أو غير خبير — يجب التحقق من المصدر حتى لو كانت الشفرة مفتوحة."
    },
    {
      section: "licence",
      tag: "تركيز · متى نختار؟",
      scene: "بنك يريد دعمًا رسميًا وتصحيحات مضمونة، وتوافقًا معروفًا مع بيئة المؤسسة، بلا تعديل للشفرة.",
      ask: "الأنسب غالبًا؟",
      type: "mcq",
      choices: [
        "Proprietary — دعم رسمي واستخدام جاهز بلا تعديل المصدر",
        "أي ملف Open source حتى لو مجهول المصدر",
        "Single-task phone OS",
        "GIF animation software فقط"
      ],
      answer: 0,
      why: "Proprietary عندما تحتاج دعمًا رسميًا وتوافقًا معروفًا واستخدامًا جاهزًا بلا تعديل المصدر."
    },

    {
      section: "files",
      tag: "تركيز · أنواع الملفات",
      scene: "المعلمة تريد إرسال صور للأهالي عبر البريد بحجم صغير، والجودة العالية جدًا ليست أولوية.",
      ask: "أي صيغة الأنسب حسب الدرس؟",
      type: "mcq",
      choices: [
        "JPEG — ضغط مع فقدان ومساحة أقل مناسب للبريد",
        "RAW — غير مضغوط وأكبر حجمًا",
        "AVI — فيديو ثقيل",
        "WAV — صوت غير مضغوط"
      ],
      answer: 0,
      why: "JPEG: ضغط مع فقدان، مساحة أقل، مناسب للبريد. قد لا يكفي إن احتجت جودة عالية جدًا."
    },
    {
      section: "files",
      tag: "تركيز · أنواع الملفات",
      scene: "مصور يريد التعديل بأعلى جودة ممكنة، والحجم الكبير على القرص مقبول.",
      ask: "أي نوع ملف؟",
      type: "mcq",
      choices: [
        "RAW — غير مضغوط ويحتاج برامج مناسبة للتعديل",
        "JPEG المضغوط للواتساب فقط",
        "MP3",
        "XML لقواعد البيانات فقط"
      ],
      answer: 0,
      why: "RAW غير مضغوط، حجم أكبر، تعديل بجودة أعلى، ويحتاج برامج مناسبة."
    },
    {
      section: "files",
      tag: "تركيز · صح / خطأ",
      scene: "مقارنة PNG و GIF و JPEG.",
      ask: "صح أم خطأ: PNG و GIF يستخدمان ضغطًا بلا فقدان، وGIF شائع للصور المتحركة.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 0,
      why: "PNG/GIF: ضغط بلا فقدان. PNG أشيع للصور الثابتة، وGIF للصور المتحركة. JPEG عكس ذلك (مع فقدان)."
    },
    {
      section: "files",
      tag: "تركيز · آثار على أصحاب المصلحة",
      scene: "الشركة حدّثت أنظمة الملفات، فأصبح العملاء والموردون لا يفتحون المرفقات، واحتاج الموظفون تدريبًا، وتأخّر العمل أيامًا.",
      ask: "ما الدرس المستفاد؟",
      type: "mcq",
      choices: [
        "عدم التوافق يعيق العملاء والموردين والموظفين، والتحديث قد يؤخر العمل ويحتاج تدريبًا",
        "نوع الملف لا يؤثر أبدًا على المؤسسة",
        "المشكلة فقط في لون الواجهة",
        "الحل دائمًا تحويل كل شيء إلى AVI"
      ],
      answer: 0,
      why: "آثار على IT systems و organisations و stakeholders: التوافق والأمان والتدريب والتأخير."
    }
  ];

  const intro = document.getElementById("intro");
  const quiz = document.getElementById("quiz");
  const result = document.getElementById("result");
  const nameInput = document.getElementById("student-name");
  const nameField = document.getElementById("name-field");
  const nameHint = document.getElementById("name-hint");
  const saveStatus = document.getElementById("save-status");
  const qCount = document.getElementById("q-count");
  const examBar = document.getElementById("exam-bar");
  const qTag = document.getElementById("q-tag");
  const qTitle = document.getElementById("q-title");
  const qScene = document.getElementById("q-scene");
  const qChoices = document.getElementById("q-choices");
  const qPrev = document.getElementById("q-prev");
  const qNext = document.getElementById("q-next");

  let deck = [];
  let i = 0;
  let studentName = "";

  const LABELS = {
    general: "مراجعة عامة (OS · UI)",
    cli: "CLI والأوامر",
    performance: "أداء نظام التشغيل",
    utility: "Utility software",
    apps: "Application software",
    licence: "Open source × Proprietary",
    files: "أنواع الملفات والآثار"
  };

  function shuffle(arr) {
    const a = [...arr];
    for (let n = a.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [a[n], a[j]] = [a[j], a[n]];
    }
    return a;
  }

  function mapQ(q) {
    if (q.type === "tf") {
      return { ...q, pick: null };
    }
    const indexed = q.choices.map((text, idx) => ({ text, idx }));
    const shuffled = shuffle(indexed);
    const answer = shuffled.findIndex((c) => c.idx === q.answer);
    return {
      ...q,
      choices: shuffled.map((c) => c.text),
      answer,
      pick: null
    };
  }

  function show(el) {
    [intro, quiz, result].forEach((n) => { n.hidden = true; });
    el.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuiz() {
    const q = deck[i];
    qCount.textContent = `${i + 1} / ${deck.length}`;
    examBar.style.width = `${((i + 1) / deck.length) * 100}%`;
    qTag.textContent = q.tag;
    qTag.className = "exam-tag" + (q.section === "general" ? "" : " focus");
    qTitle.textContent = q.ask;
    qScene.textContent = q.scene;
    qChoices.className = "exam-choices" + (q.type === "tf" ? " tf" : "");
    qChoices.innerHTML = "";
    q.choices.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "exam-choice" + (q.pick === idx ? " selected" : "");
      btn.textContent = text;
      btn.addEventListener("click", () => {
        q.pick = idx;
        renderQuiz();
      });
      qChoices.appendChild(btn);
    });
    qPrev.disabled = i === 0;
    qNext.textContent = i === deck.length - 1 ? "تسليم الإجابات" : "التالي";
  }

  function sectionStats(all) {
    const map = {};
    all.forEach((q) => {
      if (!map[q.section]) map[q.section] = { ok: 0, total: 0 };
      map[q.section].total += 1;
      if (q.pick === q.answer) map[q.section].ok += 1;
    });
    return map;
  }

  function buildReview(all) {
    const list = document.getElementById("review-list");
    list.innerHTML = "";
    all.forEach((q, n) => {
      const ok = q.pick === q.answer;
      const item = document.createElement("article");
      item.className = "review-item " + (ok ? "ok" : "bad");
      const yours = q.pick === null ? "بدون إجابة" : q.choices[q.pick];
      const correct = q.choices[q.answer];
      item.innerHTML = `
        <h3>${n + 1}) ${q.tag}</h3>
        <p class="exam-scene" style="margin-bottom:8px">${q.scene}</p>
        <p class="pick"><strong>${q.ask}</strong></p>
        <p class="pick">إجابتك: <b class="${ok ? "good" : "bad"}">${yours}</b></p>
        <p class="pick">الصحيح: <b class="good">${correct}</b></p>
        <p class="why"><strong>ليش؟</strong> ${q.why}</p>
      `;
      list.appendChild(item);
    });
  }

  function requireName() {
    const name = nameInput.value.trim();
    if (name.length < 2) {
      nameField.classList.add("is-invalid");
      nameHint.textContent = "اكتب الاسم الثلاثي قبل البدء (إجباري)";
      nameInput.focus();
      return null;
    }
    nameField.classList.remove("is-invalid");
    nameHint.textContent = "الاسم إجباري قبل البدء";
    return name;
  }

  function setSaveStatus(kind, text) {
    saveStatus.hidden = false;
    saveStatus.className = "save-status " + kind;
    saveStatus.textContent = text;
  }

  function frac(stats, key) {
    const s = stats[key] || { ok: 0, total: 0 };
    return `${s.ok}/${s.total}`;
  }

  function submitToSheet(payload) {
    if (!SHEETS_ENDPOINT) return Promise.resolve(false);
    setSaveStatus("wait", "جاري حفظ الدرجة في جدول العلامات…");
    return fetch(SHEETS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    })
      .then(() => {
        setSaveStatus("ok", "تم حفظ الدرجة في جدول العلامات ✓");
        return true;
      })
      .catch(() => {
        setSaveStatus("bad", "تعذّر حفظ الدرجة في الجدول. تحققي من الاتصال ثم أعيدي المحاولة.");
        return false;
      });
  }

  function finishAll() {
    const unanswered = deck.filter((q) => q.pick === null).length;
    if (unanswered > 0) {
      const go = confirm(`باقي ${unanswered} سؤال بلا إجابة. تسليم الآن؟`);
      if (!go) return;
    }

    const score = deck.filter((q) => q.pick === q.answer).length;
    const total = deck.length;
    const pct = Math.round((score / total) * 100);
    const name = studentName || nameInput.value.trim();
    document.getElementById("final-score").textContent = `${score}/${total}`;
    document.getElementById("score-ring").style.setProperty("--p", `${pct}%`);

    let title = "تحتاج مراجعة سريعة";
    let msg = "راجع الإجابات بالأسفل وركّز على الجزء بعد سؤال النقاش.";
    if (pct >= 90) {
      title = "ممتاز — فهمك واضح";
      msg = "ميّزت المفاهيم وخصوصًا CLI والبرمجيات والملفات.";
    } else if (pct >= 70) {
      title = "جيد — مع نقاط للمراجعة";
      msg = "الأساس تمام. شوف الأسئلة الغلط في المراجعة.";
    } else if (pct >= 50) {
      title = "مقبول — ثبّت المفاهيم";
      msg = "راجع: ليش CLI، Utility مقابل Application، Open source، وJPEG/RAW.";
    }
    if (name) msg = `${name}: ${msg}`;
    document.getElementById("result-title").textContent = title;
    document.getElementById("result-msg").textContent = `${msg} النتيجة ${pct}٪`;

    const stats = sectionStats(deck);
    const box = document.getElementById("breakdown");
    box.innerHTML = "";
    Object.keys(LABELS).forEach((key) => {
      const s = stats[key] || { ok: 0, total: 0 };
      if (!s.total) return;
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<h3>${LABELS[key]}</h3><p>${s.ok}/${s.total}</p>`;
      box.appendChild(card);
    });

    buildReview(deck);
    show(result);

    const generalScore = (stats.general || { ok: 0 }).ok;
    const generalTotal = (stats.general || { total: 0 }).total;
    const focusOk = score - generalScore;
    const focusTotal = total - generalTotal;

    submitToSheet({
      timestamp: new Date().toLocaleString("ar-JO", { hour12: false }),
      name,
      score,
      total,
      percent: pct,
      general: `${generalScore}/${generalTotal}`,
      focus: `${focusOk}/${focusTotal}`,
      cli: frac(stats, "cli"),
      performance: frac(stats, "performance"),
      utility: frac(stats, "utility"),
      apps: frac(stats, "apps"),
      licence: frac(stats, "licence"),
      files: frac(stats, "files")
    });
  }

  function startExam() {
    const name = requireName();
    if (!name) return;
    studentName = name;
    deck = shuffle(BANK).map(mapQ);
    i = 0;
    saveStatus.hidden = true;
    show(quiz);
    renderQuiz();
  }

  document.getElementById("start-exam").addEventListener("click", startExam);

  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") startExam();
  });

  nameInput.addEventListener("input", () => {
    if (nameField.classList.contains("is-invalid") && nameInput.value.trim().length >= 2) {
      nameField.classList.remove("is-invalid");
      nameHint.textContent = "الاسم إجباري قبل البدء";
    }
  });

  qPrev.addEventListener("click", () => {
    if (i > 0) {
      i -= 1;
      renderQuiz();
    }
  });

  qNext.addEventListener("click", () => {
    if (i < deck.length - 1) {
      i += 1;
      renderQuiz();
      return;
    }
    finishAll();
  });

  document.getElementById("retry-btn").addEventListener("click", () => {
    saveStatus.hidden = true;
    show(intro);
  });
})();
