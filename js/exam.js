(() => {
  const SHEETS_ENDPOINT = "";

  const BANK = [
    {
      section: "general",
      tag: "مراجعة · نظام التشغيل",
      scene: "ثبّت الطالب برنامج Word. بدون نظام تشغيل، البرنامج ما بيشتغل.",
      ask: "شو وظيفة نظام التشغيل (OS)؟",
      type: "mcq",
      choices: [
        "يربط العتاد (Hardware) بالبرامج (Software)",
        "يكتب التقارير بدل الطالب",
        "يضغط الصور عشان الإيميل",
        "يستغني عن كل البرامج"
      ],
      answer: 0,
      why: "نظام التشغيل هو الأساس: يخلّي العتاد والبرامج يشتغلوا مع بعض."
    },
    {
      section: "general",
      tag: "مراجعة · أنواع OS",
      scene: "منظم ضربات القلب لازم يستجيب فورًا. أي تأخير ممكن يهدد حياة المريض.",
      ask: "أي نوع نظام تشغيل نختار؟",
      type: "mcq",
      choices: [
        "Real time (RTOS) · الزمن الحقيقي",
        "Multitasking · مستخدم واحد بعدة برامج",
        "Multi-user · عدة مستخدمين",
        "Single-task · برنامج واحد فقط"
      ],
      answer: 0,
      why: "إذا التأخير خطر على السلامة نختار نظام الزمن الحقيقي (RTOS)."
    },
    {
      section: "general",
      tag: "مراجعة · أنواع OS",
      scene: "غسالة ذكية: البرنامج داخل الجهاز، ووظيفتها ثابتة (غسيل وتجفيف).",
      ask: "هذا مثال على أي نوع؟",
      type: "mcq",
      choices: [
        "Multi-user · عدة مستخدمين",
        "Embedded · نظام مدمج",
        "سطر أوامر (CLI)",
        "برنامج مكتب مفتوح المصدر"
      ],
      answer: 1,
      why: "Embedded يعني نظام مدمج داخل الجهاز لوظيفة محددة، مثل الغسالة أو التلفاز."
    },
    {
      section: "general",
      tag: "مراجعة · مقارنة",
      scene: "سارة على هاتفها تفتح واتساب وخرائط ويوتيوب معًا. أحمد وزملاؤه يعدّلون نفس ملف Google Sheets من أجهزة مختلفة.",
      ask: "شو الفرق الصحيح؟",
      type: "mcq",
      choices: [
        "الاثنان Multi-user لأن في برامج كثيرة",
        "سارة: مستخدمة واحدة بعدة برامج · الفريق: عدة مستخدمين على نفس الملف",
        "سارة: برنامج واحد فقط · أحمد: نظام مدمج",
        "ما في فرق"
      ],
      answer: 1,
      why: "سارة وحدها تستخدم عدة برامج. الفريق يشتركون في نفس الملف على السحابة = عدة مستخدمين."
    },
    {
      section: "general",
      tag: "مراجعة · الواجهات",
      scene: "على الصراف الآلي تظهر قائمة: سحب، رصيد، تحويل، خروج.",
      ask: "شو نوع هذه الواجهة؟",
      type: "mcq",
      choices: [
        "سطر أوامر (CLI)",
        "Menu-based · قائمة خيارات",
        "نظام عدة مستخدمين",
        "ملف صورة RAW"
      ],
      answer: 1,
      why: "قائمة خيارات جاهزة = Menu-based. مثل الصراف والميكروويف وآلة التذاكر."
    },
    {
      section: "general",
      tag: "مراجعة · الواجهات",
      scene: "طفل يستخدم الكمبيوتر لأول مرة. ينقر على الأيقونات ويفتح نوافذ بالفأرة.",
      ask: "أي واجهة تناسبه؟",
      type: "mcq",
      choices: [
        "سطر أوامر (CLI)",
        "واجهة رسومية (GUI)",
        "نظام الزمن الحقيقي",
        "محرر أكواد"
      ],
      answer: 1,
      why: "الواجهة الرسومية سهلة للمبتدئ: أيقونات ونوافذ ومؤشر، بدون كتابة أوامر."
    },
    {
      section: "general",
      tag: "مراجعة · صح / خطأ",
      scene: "نقارن واجهة رسومية فيها أيقونات ونوافذ، مع سطر أوامر نصي على جهاز ضعيف.",
      ask: "صح أم خطأ: الواجهة الرسومية (GUI) تحتاج ذاكرة وطاقة أكبر من سطر الأوامر (CLI).",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 0,
      why: "GUI أثقل على الجهاز. CLI أخف ويحتاج موارد أقل."
    },
    {
      section: "cli",
      tag: "تركيز · ليش CLI؟",
      scene: "الواجهة الرسومية سهلة. ليش لسا بنتعلّم سطر الأوامر (CLI)؟",
      ask: "شو السبب الصحيح؟",
      type: "mcq",
      choices: [
        "لأنه أسرع أحيانًا، مفيد وقت العطل، ويساعد نفهم الجهاز",
        "لأن الواجهة الرسومية بطلت تشتغل على الأجهزة الحديثة",
        "لأن لازم نترك الأيقونات نهائيًا",
        "لأن المدرسة تمنع الواجهة الرسومية"
      ],
      answer: 0,
      why: "GUI للاستخدام اليومي السهل. CLI للسرعة، الإصلاح وقت العطل، وفهم الجهاز."
    },
    {
      section: "cli",
      tag: "تركيز · ليش CLI؟",
      scene: "اللابتوب علّق والواجهة الرسومية ما فتحت. الفني قدر يفتح نافذة أوامر نصية.",
      ask: "ليش سطر الأوامر مهم هنا؟",
      type: "mcq",
      choices: [
        "لأنه غالبًا آخر طريقة نقدر نصلح فيها الجهاز",
        "لأنه الوحيد اللي يشغّل الألعاب",
        "لأنه يضغط الصور تلقائيًا",
        "لأنه يغني عن نظام التشغيل"
      ],
      answer: 0,
      why: "إذا الواجهة الرسومية تعطّلت، سطر الأوامر غالبًا آخر باب للإصلاح."
    },
    {
      section: "cli",
      tag: "تركيز · أوامر CMD",
      scene: "بدك تعرف عنوان IP لجهازك من CMD.",
      ask: "أي أمر تكتب؟",
      type: "mcq",
      choices: [
        "ipconfig",
        "color a",
        "echo Hello",
        "cls"
      ],
      answer: 0,
      why: "الأمر ipconfig يعرض عنوان IP وإعدادات الشبكة."
    },
    {
      section: "cli",
      tag: "تركيز · أوامر CMD",
      scene: "في الواجهة الرسومية نستخدم مستكشف الملفات لنشوف المجلدات.",
      ask: "شو الأوامر المشابهة في CMD؟",
      type: "mcq",
      choices: [
        "dir و cd",
        "ping و nslookup",
        "color و ver",
        "whoami و hostname"
      ],
      answer: 0,
      why: "dir يعرض محتويات المجلد. cd ينقلك لمجلد ثاني. نفس فكرة مستكشف الملفات."
    },
    {
      section: "cli",
      tag: "تركيز · صح / خطأ",
      scene: "الطالب كتب في CMD: ping 8.8.8.8",
      ask: "صح أم خطأ: هذا الأمر يختبر هل الإنترنت واصل للجهاز.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 0,
      why: "ping 8.8.8.8 يختبر هل الشبكة توصل للجهاز. ping localhost يختبر الجهاز نفسه."
    },
    {
      section: "cli",
      tag: "تركيز · صح / خطأ",
      scene: "في نشاط الصف نستخدم أوامر قراءة فقط.",
      ask: "صح أم خطأ: مسموح نحذف ملفات أو نغيّر إعدادات الشبكة من CMD.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "ممنوع الحذف أو تغيير الشبكة. النشاط للقراءة والاستعلام فقط."
    },
    {
      section: "cli",
      tag: "تركيز · صح / خطأ",
      scene: "طالب يقول: CLI أقوى، لازم نترك الواجهة الرسومية ونستخدم الأوامر لكل شيء.",
      ask: "صح أم خطأ: سطر الأوامر بديل يومي عن الواجهة الرسومية لكل الناس.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "CLI مش بديل يومي. هو أداة للسرعة والإصلاح والفهم. GUI تبقى أسهل للاستخدام اليومي."
    },
    {
      section: "performance",
      tag: "تركيز · أداء النظام",
      scene: "جهاز يشغّل فيديو وتحرير فيديو. جهاز ثاني يفتح جداول بسيطة فقط.",
      ask: "ليش الجهاز الأول أثقل؟",
      type: "mcq",
      choices: [
        "لأنه يعالج كمية بيانات أكبر",
        "بسبب نوع الخط في الواجهة",
        "لأن الاثنين أنظمة مدمجة",
        "بسبب امتداد الملف RTF"
      ],
      answer: 0,
      why: "الفيديو والتحرير يحتاجون بيانات كثيرة، لذلك النظام يصير أبطأ."
    },
    {
      section: "performance",
      tag: "تركيز · أداء النظام",
      scene: "الطالب فتح 15 برنامج مع فيديوهات. اللابتوب صار بطيء جدًا.",
      ask: "ليش صار بطيء؟",
      type: "mcq",
      choices: [
        "كثرة البرامج تضغط على الذاكرة والمعالج",
        "نظام التشغيل تعطّل وما بينصلح",
        "لأن الواجهة كانت قائمة خيارات",
        "لأن الجهاز لازم يكون نظام مدمج"
      ],
      answer: 0,
      why: "الذاكرة والمعالج محدودان. كل ما زاد عدد البرامج زاد البطء."
    },
    {
      section: "performance",
      tag: "تركيز · أداء النظام",
      scene: "برنامج يشتغل على أجهزة Apple، وما يشتغل على Android.",
      ask: "هذه المشكلة اسمها؟",
      type: "mcq",
      choices: [
        "عدم التوافق بين الأنظمة (Compatibility)",
        "نظام الزمن الحقيقي فقط",
        "ضغط صورة JPEG",
        "تغيير ألوان الواجهة"
      ],
      answer: 0,
      why: "بعض البرامج لا تعمل على كل الأنظمة. هذا اسمه التوافق (Compatibility)."
    },
    {
      section: "utility",
      tag: "تركيز · Utility",
      scene: "برامج تساعد نظام التشغيل: حماية، صيانة، وتحسين السرعة.",
      ask: "شو اسم هذه البرامج؟",
      type: "mcq",
      choices: [
        "Utility · برامج المساعدة",
        "برامج التطبيقات مثل Word فقط",
        "حزم موارد المؤسسات (ERP)",
        "نوع ملف JPEG"
      ],
      answer: 0,
      why: "Utility تصون الجهاز وتحسّن أداءه، مثل Antivirus والنسخ الاحتياطي."
    },
    {
      section: "utility",
      tag: "تركيز · صح / خطأ",
      scene: "طالب ثبّت 3 برامج Antivirus معًا عشان الحماية أقوى.",
      ask: "صح أم خطأ: تثبيت عدة برامج Antivirus معًا دائمًا أفضل وبلا مشاكل.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "عدة برامج Antivirus معًا ممكن تتعارض وتبطّئ الجهاز."
    },
    {
      section: "utility",
      tag: "تركيز · Utility والتطبيقات",
      scene: "موظفة تكتب تقرير على Word. زميلها يشغّل برنامج تنظيف القرص.",
      ask: "التصنيف الصحيح؟",
      type: "mcq",
      choices: [
        "Word = تطبيق · تنظيف القرص = برنامج مساعدة (Utility)",
        "الاثنان Utility لأنهم على نفس الجهاز",
        "Word = نظام تشغيل",
        "تنظيف القرص = تطبيق مثل برامج التصميم"
      ],
      answer: 0,
      why: "التطبيق ينجز شغل المستخدم (مثل التقرير). Utility يصون الجهاز ويحسّن أداءه."
    },
    {
      section: "apps",
      tag: "تركيز · التطبيقات",
      scene: "شركة تجمع الشراء والمبيعات والمخزون والمحاسبة في برنامج واحد.",
      ask: "شو اسم هذا النوع؟",
      type: "mcq",
      choices: [
        "ERP · حزم موارد المؤسسات",
        "تعريفات الأجهزة (Drivers)",
        "برنامج ترتيب القرص",
        "واجهة صراف آلي"
      ],
      answer: 0,
      why: "ERP برنامج واحد يربط أقسام الشركة معًا: شراء، مبيعات، مخزون، محاسبة."
    },
    {
      section: "apps",
      tag: "تركيز · اختيار التطبيقات",
      scene: "استوديو تصميم يختار برامج الموظفين متعودين عليها، ومناسبة لشغلهم الإبداعي.",
      ask: "على أي أساس اختاروا البرامج؟",
      type: "mcq",
      choices: [
        "سهولة الاستخدام، مهارات الموظفين، نوع الصناعة، والتوافق",
        "لازم يستخدموا نظام الزمن الحقيقي دائمًا",
        "لازم يمنعوا المصدر المفتوح دائمًا",
        "لازم يحفظوا كل الملفات JPEG"
      ],
      answer: 0,
      why: "نختار التطبيق حسب سهولته، توافقه، مهارات الموظفين، ونوع الشغل."
    },
    {
      section: "licence",
      tag: "تركيز · Open source",
      scene: "برنامج غالبًا مجاني، نقدر ننسخه ونعدّله، وكثير ناس يراجعوه.",
      ask: "هذا يوصف أي نوع؟",
      type: "mcq",
      choices: [
        "Open source · المصدر المفتوح",
        "Proprietary · مملوك للشركة فقط",
        "نظام مدمج دائمًا",
        "ضغط صور JPEG"
      ],
      answer: 0,
      why: "المصدر المفتوح يمكن نسخه وتعديله، لكن لازم نتأكد أن المصدر موثوق."
    },
    {
      section: "licence",
      tag: "تركيز · Proprietary",
      scene: "الشركة تبيع البرنامج، وما تسمح تعدّل الشفرة المصدرية.",
      ask: "هذا يوصف أي نوع؟",
      type: "mcq",
      choices: [
        "Proprietary · برمجيات مملوكة",
        "Open source دائمًا",
        "Antivirus فقط",
        "واجهة ميكروويف"
      ],
      answer: 0,
      why: "البرنامج المملوك ملك الشركة. نشتري حق الاستخدام، وما نعدّل الشفرة."
    },
    {
      section: "licence",
      tag: "تركيز · صح / خطأ",
      scene: "طالب يقول: المصدر المفتوح ظاهر للجميع، إذن هو آمن 100%.",
      ask: "صح أم خطأ: برامج Open source آمنة دائمًا وما تحتاج فحص.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 1,
      why: "ممكن أحد يعدّل الشفرة بشكل سيئ. لازم نتحقق من المصدر حتى لو البرنامج مفتوح."
    },
    {
      section: "licence",
      tag: "تركيز · متى نختار؟",
      scene: "بنك يريد دعم رسمي من الشركة وتصحيحات مضمونة، بدون تعديل الشفرة.",
      ask: "أي نوع أنسب؟",
      type: "mcq",
      choices: [
        "Proprietary · برنامج مملوك مع دعم رسمي",
        "أي برنامج مفتوح المصدر حتى لو مصدره مجهول",
        "نظام هاتف ببرنامج واحد",
        "برنامج صور متحركة GIF"
      ],
      answer: 0,
      why: "إذا بدنا دعم رسمي واستخدام جاهز بدون تعديل الشفرة، نختار البرنامج المملوك."
    },
    {
      section: "files",
      tag: "تركيز · أنواع الملفات",
      scene: "المعلمة بدها ترسل صور بالإيميل. الحجم الصغير أهم من أعلى جودة.",
      ask: "أي نوع ملف أنسب؟",
      type: "mcq",
      choices: [
        "JPEG — حجم أصغر وجودة أقل شوي",
        "RAW — حجم كبير جدًا",
        "AVI — ملف فيديو ثقيل",
        "WAV — ملف صوت كبير"
      ],
      answer: 0,
      why: "JPEG يصغّر حجم الصورة (مع فقدان بسيط للجودة)، لذلك مناسب للإيميل."
    },
    {
      section: "files",
      tag: "تركيز · أنواع الملفات",
      scene: "مصور بدو يعدّل الصورة بأعلى جودة. حجم الملف الكبير ما يهمه.",
      ask: "أي نوع ملف يختار؟",
      type: "mcq",
      choices: [
        "RAW — جودة عالية وحجم كبير",
        "JPEG المضغوط للإيميل فقط",
        "MP3",
        "XML"
      ],
      answer: 0,
      why: "RAW يحفظ الصورة بدون ضغط قوي، فالتعديل يكون بجودة أعلى."
    },
    {
      section: "files",
      tag: "تركيز · صح / خطأ",
      scene: "نقارن بين PNG و GIF و JPEG.",
      ask: "صح أم خطأ: PNG و GIF يحفظان الصورة بدون فقدان للجودة، وGIF مناسب للصور المتحركة.",
      type: "tf",
      choices: ["صح", "خطأ"],
      answer: 0,
      why: "PNG و GIF بلا فقدان للجودة. GIF للصور المتحركة. JPEG يفقد جزءًا من الجودة ليصغّر الحجم."
    },
    {
      section: "files",
      tag: "تركيز · آثار الملفات",
      scene: "الشركة غيّرت أنواع الملفات. العملاء ما قدروا يفتحوا المرفقات، واحتاج الموظفون تدريب، والشغل تأخّر.",
      ask: "شو يعني هذا؟",
      type: "mcq",
      choices: [
        "عدم توافق الملفات يعيق العمل ويحتاج تدريب",
        "نوع الملف لا يؤثر على الشركة أبدًا",
        "المشكلة فقط في لون الواجهة",
        "الحل دائمًا تحويل كل شيء إلى فيديو AVI"
      ],
      answer: 0,
      why: "اختيار نوع الملف يؤثر على العملاء والموظفين. عدم التوافق يؤخر الشغل ويحتاج تدريب."
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
  const qFeedback = document.getElementById("q-feedback");
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
    const locked = q.pick !== null;
    const ok = locked && q.pick === q.answer;
    qCount.textContent = `${i + 1} / ${deck.length}`;
    examBar.style.width = `${((i + 1) / deck.length) * 100}%`;
    qTag.textContent = q.tag;
    qTag.className = "exam-tag" + (q.section === "general" ? "" : " focus");
    qTitle.textContent = q.ask;
    qScene.textContent = q.scene;
    qChoices.className = "exam-choices" + (q.type === "tf" ? " tf" : "") + (locked ? " is-locked" : "");
    qChoices.innerHTML = "";
    q.choices.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      let cls = "exam-choice";
      if (locked) {
        if (idx === q.answer) cls += " is-correct";
        if (idx === q.pick && idx !== q.answer) cls += " is-wrong";
      }
      btn.className = cls;
      btn.textContent = text;
      btn.disabled = locked;
      btn.addEventListener("click", () => {
        if (q.pick !== null) return;
        q.pick = idx;
        renderQuiz();
      });
      qChoices.appendChild(btn);
    });

    if (locked) {
      qFeedback.hidden = false;
      qFeedback.className = "exam-feedback " + (ok ? "ok" : "bad");
      qFeedback.innerHTML = ok
        ? `<strong>إجابة صحيحة.</strong> ${q.why}`
        : `<strong>إجابة خاطئة.</strong> الصحيح: ${q.choices[q.answer]}. ${q.why}`;
    } else {
      qFeedback.hidden = true;
      qFeedback.textContent = "";
      qFeedback.className = "exam-feedback";
    }

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
    if (deck[i].pick === null) {
      qFeedback.hidden = false;
      qFeedback.className = "exam-feedback bad";
      qFeedback.textContent = "اختَر إجابة أولًا حتى تشوف إذا كانت صحيحة.";
      return;
    }
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
