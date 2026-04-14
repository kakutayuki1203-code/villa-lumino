/* ===================================
   多言語テキスト定義（日本語 / English）
   =================================== */
const i18n = {
  ja: {
    /* ナビ */
    nav_rooms:    'お部屋',
    nav_amenity:  'アメニティ',
    nav_access:   'アクセス',
    nav_about:    'ヴィラについて',
    nav_reserve:  'ご予約',

    /* ヒーロー */
    hero_tag:     '海辺のプライベートヴィラ',
    hero_title_1: 'Escape to',
    hero_title_2: 'Lumino',
    hero_sub:     '波音と星空に包まれた、二人だけの聖域へ。\nプライベートプール付き全室オーシャンビューヴィラ。',
    hero_cta_1:   'ご予約はこちら',
    hero_cta_2:   'ヴィラを見る',
    hero_scroll:  'Scroll',

    /* フィーチャー */
    feat_label:   '選ばれる理由',
    feat_title:   'ここにしかない\n特別な体験を',
    feat_desc:    '三つの贅沢が、あなたの滞在を唯一無二のものにします。',
    feat1_title:  'プライベートプール',
    feat1_en:     'Private Pool',
    feat1_desc:   '全室に専用インフィニティプールを完備。誰にも邪魔されない二人だけの時間を。',
    feat2_title:  'オーシャンビュー',
    feat2_en:     'Ocean View',
    feat2_desc:   '水平線まで広がる絶景。部屋のどこにいても、海を感じられる設計。',
    feat3_title:  'スパ＆サウナ',
    feat3_en:     'Spa & Sauna',
    feat3_desc:   'プライベートサウナとスパでリトリート。アロマセラピーで心身をリセット。',

    /* ギャラリー */
    gal_label:    'ギャラリー',
    gal_title:    'ヴィラの空間',

    /* About */
    about_label:  'Villa Luminoについて',
    about_title:  '海と光が\n織りなす場所',
    about_desc:   '岬の先端に佇む全7棟のプライベートヴィラ。それぞれが独立した建物として設計され、完全なプライバシーと圧倒的な開放感を両立しています。',
    about_quote:  '"特別な日を、さらに特別な場所で。"',
    stat1_num:    '7',
    stat1_unit:   '棟',
    stat1_label:  'プライベートヴィラ',
    stat2_num:    '24',
    stat2_unit:   'h',
    stat2_label:  'コンシェルジュ対応',
    stat3_num:    '∞',
    stat3_unit:   '',
    stat3_label:  'プール専有時間',

    /* アクセス */
    acc_label:    'アクセス',
    acc_title:    '来訪のご案内',
    acc_map_alt:  '地図',
    acc1_label:   '住所',
    acc1_text:    '〒000-0000 ●●県●●市 海岸通り1-1',
    acc2_label:   '電車',
    acc2_text:    '●●駅より送迎あり（要事前予約）',
    acc3_label:   '車',
    acc3_text:    '●●ICより約15分',
    acc4_label:   '空港',
    acc4_text:    '●●空港より約40分（専用送迎可）',

    /* 予約 */
    book_label:   'ご予約・お問い合わせ',
    book_title:   '特別な滞在を\n予約する',
    book_desc:    'ご予約は電話・メール・フォームにて承ります。記念日・サプライズのご相談もお気軽にどうぞ。',
    form_checkin: 'チェックイン',
    form_checkout:'チェックアウト',
    form_guests:  'ご人数',
    form_name:    'お名前',
    form_email:   'メールアドレス',
    form_message: 'ご要望・ご質問',
    form_ph_name: '山田 花子',
    form_ph_email:'example@email.com',
    form_ph_msg:  '記念日のサプライズ演出についてご相談したいです',
    form_submit:  '送信する',
    form_guests_1:'1名',
    form_guests_2:'2名',
    form_guests_3:'3名',
    form_guests_4:'4名以上',

    /* フッター */
    ft_desc:      '岬の先端に佇む、海辺のプライベートヴィラ。\n二人だけの特別な時間を。',
    ft_villa:     'ヴィラ',
    ft_rooms:     'お部屋',
    ft_amenity:   'アメニティ',
    ft_gallery:   'ギャラリー',
    ft_dining:    'ダイニング',
    ft_info:      'インフォメーション',
    ft_access:    'アクセス',
    ft_faq:       'よくある質問',
    ft_privacy:   'プライバシー',
    ft_cancel:    'キャンセルポリシー',
    ft_contact:   'お問い合わせ',
    ft_reserve:   '予約・問い合わせ',
    ft_copy:      '© 2026 Villa Lumino. All rights reserved.',

    /* チャットボット */
    chat_status:  'オンライン — 24時間対応',
    chat_name:    'Lumino コンシェルジュ',
    chat_input_ph:'メッセージを入力…',
    chat_greet:   'こんにちは！Villa Lumino コンシェルジュです🌊\nご予約・施設のご案内・記念日プランなど、何でもお気軽にどうぞ。',
    qr_reserve:   'ご予約について',
    qr_facility:  '施設・アメニティ',
    qr_anniv:     '記念日プランを相談',
    qr_access:    'アクセスを教えて',
  },

  en: {
    /* ナビ */
    nav_rooms:    'Rooms',
    nav_amenity:  'Amenities',
    nav_access:   'Access',
    nav_about:    'About',
    nav_reserve:  'Reserve',

    /* ヒーロー */
    hero_tag:     'Private Beachside Villa',
    hero_title_1: 'Escape to',
    hero_title_2: 'Lumino',
    hero_sub:     'A private sanctuary wrapped in the sound of waves and a canopy of stars.\nAll-ocean-view villas with private infinity pools.',
    hero_cta_1:   'Book Now',
    hero_cta_2:   'Explore Villa',
    hero_scroll:  'Scroll',

    /* フィーチャー */
    feat_label:   'Why Choose Us',
    feat_title:   'Three Luxuries,\nOne Stay',
    feat_desc:    'An exclusive trio of experiences that makes your stay truly one-of-a-kind.',
    feat1_title:  'Private Pool',
    feat1_en:     'Infinity Pool',
    feat1_desc:   'Every villa features a dedicated infinity pool. Your private escape, undisturbed.',
    feat2_title:  'Ocean View',
    feat2_en:     'Panoramic Sea',
    feat2_desc:   'Unobstructed ocean vistas from every corner. Feel the sea wherever you are.',
    feat3_title:  'Spa & Sauna',
    feat3_en:     'Wellness Retreat',
    feat3_desc:   'Unwind in a private sauna and spa. Reset body and mind with aromatherapy.',

    /* ギャラリー */
    gal_label:    'Gallery',
    gal_title:    'Villa Spaces',

    /* About */
    about_label:  'About Villa Lumino',
    about_title:  'Where Sea\nMeets Light',
    about_desc:   'Seven private villas perched at the tip of the cape. Each standalone building balances complete privacy with breathtaking openness.',
    about_quote:  '"Make a special day even more special."',
    stat1_num:    '7',
    stat1_unit:   '',
    stat1_label:  'Private Villas',
    stat2_num:    '24',
    stat2_unit:   'h',
    stat2_label:  'Concierge Service',
    stat3_num:    '∞',
    stat3_unit:   '',
    stat3_label:  'Pool Exclusivity',

    /* アクセス */
    acc_label:    'Access',
    acc_title:    'Getting Here',
    acc_map_alt:  'Map',
    acc1_label:   'Address',
    acc1_text:    '1-1 Kaigan-dori, ●● City',
    acc2_label:   'Train',
    acc2_text:    'Shuttle from ●● Station (reservation required)',
    acc3_label:   'Car',
    acc3_text:    'Approx. 15 min from ●● IC',
    acc4_label:   'Airport',
    acc4_text:    'Approx. 40 min from ●● Airport (private transfer available)',

    /* 予約 */
    book_label:   'Reservations & Inquiries',
    book_title:   'Reserve Your\nEscape',
    book_desc:    'Book by phone, email, or form. Contact us for anniversary surprises and special arrangements.',
    form_checkin: 'Check-in',
    form_checkout:'Check-out',
    form_guests:  'Guests',
    form_name:    'Full Name',
    form_email:   'Email',
    form_message: 'Requests / Questions',
    form_ph_name: 'Jane Doe',
    form_ph_email:'example@email.com',
    form_ph_msg:  'I would like to plan a surprise anniversary setup.',
    form_submit:  'Send',
    form_guests_1:'1 Guest',
    form_guests_2:'2 Guests',
    form_guests_3:'3 Guests',
    form_guests_4:'4+ Guests',

    /* フッター */
    ft_desc:      'A beachside private villa perched at the cape.\nYour time. Your sanctuary.',
    ft_villa:     'Villa',
    ft_rooms:     'Rooms',
    ft_amenity:   'Amenities',
    ft_gallery:   'Gallery',
    ft_dining:    'Dining',
    ft_info:      'Information',
    ft_access:    'Access',
    ft_faq:       'FAQ',
    ft_privacy:   'Privacy',
    ft_cancel:    'Cancellation',
    ft_contact:   'Contact',
    ft_reserve:   'Book / Inquire',
    ft_copy:      '© 2026 Villa Lumino. All rights reserved.',

    /* チャットボット */
    chat_status:  'Online — 24h Support',
    chat_name:    'Lumino Concierge',
    chat_input_ph:'Type a message…',
    chat_greet:   'Welcome to Villa Lumino 🌊\nAsk me anything about reservations, amenities, or anniversary plans.',
    qr_reserve:   'About Reservations',
    qr_facility:  'Facilities & Amenities',
    qr_anniv:     'Anniversary Plan',
    qr_access:    'Getting Here',
  }
};

/* ===================================
   チャットボット自動応答テキスト
   =================================== */
const botReplies = {
  ja: {
    reserve: 'ご予約は、フォームのほかお電話（000-0000-0000）でも承っています。\nご希望の日程はいつ頃をお考えでしょうか？😊',
    facility:'プライベートプール・屋外ジャクジー・プライベートサウナ・バスルーム完備です。\n全棟インターネット無料・朝食付きプランもございます🌿',
    anniv:   '記念日のご相談、喜んでお受けします！\nお花のアレンジ・ケーキの手配・サプライズ演出など、どうぞお気軽に。\n具体的なご希望をお聞かせください🥂',
    access:  '最寄り駅からの送迎をご用意しております（要事前予約）。\n空港からの専用送迎もご手配可能です。詳しくはアクセスセクションをご確認ください🚗',
    default: 'ありがとうございます。\n担当コンシェルジュより折り返しご連絡いたします。\n他にご質問はございますか？',
  },
  en: {
    reserve: 'You can reserve via the form or call us at 000-0000-0000.\nWhat dates are you considering? 😊',
    facility:'Each villa features a private pool, outdoor jacuzzi, private sauna, and full bath.\nFree Wi-Fi and breakfast plans are available 🌿',
    anniv:   'We love helping with anniversary surprises!\nFloral arrangements, cake orders, surprise setups — just let us know.\nWhat did you have in mind? 🥂',
    access:  'We offer shuttle service from the nearest station (reservation required).\nPrivate airport transfers are also available. See the Access section for details 🚗',
    default: 'Thank you!\nOur concierge team will follow up with you shortly.\nIs there anything else I can help with?',
  }
};

/* ===================================
   状態管理
   =================================== */
let currentLang = 'ja';
let chatOpen    = false;

/* ===================================
   言語切替
   =================================== */
function setLang(lang) {
  currentLang = lang;

  /* 言語ボタンのアクティブ状態を更新 */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* data-i18n 属性を持つ要素のテキストを書き換え */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = i18n[lang][key];
    if (text !== undefined) {
      /* placeholder 属性の場合は別処理 */
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', text);
      } else {
        /* 改行コードを <br> に変換（innerHTMLで反映） */
        el.innerHTML = text.replace(/\n/g, '<br>');
      }
    }
  });

  /* select の option を更新 */
  document.querySelectorAll('select[data-i18n-opts]').forEach(sel => {
    const keys = sel.dataset.i18nOpts.split(',');
    sel.querySelectorAll('option[data-i18n-opt]').forEach((opt, i) => {
      if (keys[i]) opt.textContent = i18n[lang][keys[i]];
    });
  });

  /* チャットウィンドウの初期メッセージを更新 */
  updateChatGreet();
  updateQuickReplies();
}

/* ===================================
   ナビゲーション — スクロールで背景変更
   =================================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ===================================
   ハンバーガーメニュー
   =================================== */
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* モバイルメニューのリンクをクリックしたら閉じる */
document.querySelectorAll('.nav__mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===================================
   スクロールフェードイン（IntersectionObserver）
   =================================== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        /* 一度表示したら監視解除 */
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===================================
   チャットボット
   =================================== */
const chatFab     = document.getElementById('chatFab');
const chatWindow  = document.getElementById('chatWindow');
const chatInput   = document.getElementById('chatInput');
const chatSend    = document.getElementById('chatSend');
const chatMsgs    = document.getElementById('chatMessages');
const quickArea   = document.getElementById('quickReplies');

/* FAB トグル */
chatFab.addEventListener('click', () => {
  chatOpen = !chatOpen;
  chatFab.classList.toggle('open', chatOpen);
  chatWindow.classList.toggle('open', chatOpen);
  if (chatOpen) chatInput.focus();
});

/* メッセージを追加 */
function addMsg(text, type = 'bot') {
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerHTML = `<div class="msg__bubble">${text.replace(/\n/g, '<br>')}</div>`;
  chatMsgs.appendChild(div);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

/* ボットの返答を取得 */
function getBotReply(input) {
  const t = input.toLowerCase();
  const r = botReplies[currentLang];
  if (/予約|reserve|book|料金|price/.test(t))    return r.reserve;
  if (/施設|アメニティ|facility|amenity|pool|プール|spa|サウナ/.test(t)) return r.facility;
  if (/記念|anniversary|サプライズ|surprise|誕生/.test(t)) return r.anniv;
  if (/アクセス|access|交通|電車|車|airport|送迎/.test(t)) return r.access;
  return r.default;
}

/* 送信処理 */
function sendMsg() {
  const text = chatInput.value.trim();
  if (!text) return;
  addMsg(text, 'user');
  chatInput.value = '';

  /* 少し遅らせてボット返答（自然な会話感） */
  setTimeout(() => addMsg(getBotReply(text), 'bot'), 600);
}

chatSend.addEventListener('click', sendMsg);
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
});

/* クイック返信ボタン */
function updateQuickReplies() {
  const t = i18n[currentLang];
  quickArea.innerHTML = `
    <button class="quick-btn" data-reply="${t.qr_reserve}">${t.qr_reserve}</button>
    <button class="quick-btn" data-reply="${t.qr_facility}">${t.qr_facility}</button>
    <button class="quick-btn" data-reply="${t.qr_anniv}">${t.qr_anniv}</button>
    <button class="quick-btn" data-reply="${t.qr_access}">${t.qr_access}</button>
  `;
  quickArea.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addMsg(btn.dataset.reply, 'user');
      setTimeout(() => addMsg(getBotReply(btn.dataset.reply), 'bot'), 600);
    });
  });
}

/* 初期グリーティングメッセージを設定（言語切替時も更新） */
function updateChatGreet() {
  /* 最初のメッセージのみ更新（追加メッセージがある場合は変えない） */
  const firstMsg = chatMsgs.querySelector('.msg.bot .msg__bubble');
  if (firstMsg && chatMsgs.querySelectorAll('.msg').length === 1) {
    firstMsg.innerHTML = i18n[currentLang].chat_greet.replace(/\n/g, '<br>');
  }
}

/* ===================================
   フォーム送信（デモ: アラートのみ）
   =================================== */
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const msg = currentLang === 'ja'
    ? 'お問い合わせありがとうございます。\n担当者より24時間以内にご連絡いたします。'
    : 'Thank you for your inquiry.\nWe will contact you within 24 hours.';
  alert(msg);
  e.target.reset();
});

/* ===================================
   初期化
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
  /* 言語ボタンにイベントを付与 */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* クイック返信の初期化 */
  updateQuickReplies();

  /* 初期言語を適用（HTML は ja で記述済みなのでテキスト更新は不要だが念のため） */
  setLang('ja');
});
