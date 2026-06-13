/* ──────────────────────────────────────────────────────────────────────────
   i18n.js — Internacionalización compartida del dashboard Veletoporra
   Idiomas: español (por defecto) e inglés. Persistencia en localStorage.
   Cargar este script en el <head> ANTES del script propio de cada página.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ── Diccionario (claves namespaceadas por página: idx_ / pron_ / prem_) ──
  const STR = {
    es: {
      // Comunes
      nav_clasificacion: '📊 Clasificación',
      nav_pronosticos:   '🔮 Pronósticos',
      nav_premios:       '🏆 Premios',
      lang_switch_title: 'Switch to English',
      lang_switch_label: '🌐 EN',
      result_sg: 'resultado',
      result_pl: 'resultados',
      no_results: 'Sin resultados',
      visit: 'Visitar →',

      // index.html
      idx_doc_title:   'Veletoporra Mundial 2026 — Clasificación',
      idx_fase_fallback: 'Clasificación General',
      idx_demo_fase:   'Demo — Torneo no iniciado',
      idx_last_update: 'Última actualización',
      idx_stat_participants: 'Participantes',
      idx_stat_leader: 'Líder',
      idx_stat_leader_pts: 'Puntos líder',
      idx_stat_you: 'Tu posición',
      idx_search_ph: 'Busca tu nombre o alias…',
      idx_th_pos_title: 'Posición',
      idx_th_mov: 'Mov',
      idx_th_mov_title: 'Movimiento respecto a ayer',
      idx_th_name: 'Nombre',
      idx_th_total: 'Total',
      idx_th_groups: 'Grupos',
      idx_th_elim: 'Elim.',
      idx_th_picm: 'Pic.M',
      idx_th_picm_title: 'Pichichi Mundial',
      idx_th_pice: 'Pic.E',
      idx_th_pice_title: 'Pichichi Español',
      idx_loading: 'Cargando clasificación…',
      idx_no_match: 'Sin participantes que coincidan.',
      idx_detail_empty: 'Desglose disponible cuando empiece el torneo.',
      idx_col_real: 'real',
      idx_col_pron: 'pron',
      idx_col_pts: 'pts',
      idx_subtotal: 'Subtotal',
      idx_pichichi: 'Pichichi',
      idx_pic_m1: '🌍 Mundial 1ª: ',
      idx_pic_m1_title: 'Elección preferente — doble puntuación si acierta',
      idx_pic_m2: '🌍 Mundial 2ª: ',
      idx_pic_m2_title: 'Elección secundaria',
      idx_pic_esp: '🇪🇸 España: ',
      idx_view_detail: 'Ver desglose por partido',
      idx_sponsors_label: 'Patrocinadores',
      idx_sponsor_badge: 'Patrocinador',

      // pronosticos.html
      pron_doc_title: 'Veletoporra Mundial 2026 — Pronósticos',
      pron_subtitle: 'Pronósticos',
      pron_search_ph: 'Busca tu nombre o el de otro participante…',
      pron_empty_title: 'Consulta los pronósticos',
      pron_empty_sub: 'Escribe tu nombre en el buscador para ver todos tus pronósticos.<br>También puedes buscar a cualquier otro participante.',
      pron_err_title: 'No se pudo cargar el archivo de pronósticos',
      pron_err_sub: 'Asegúrate de abrir esta página desde el servidor local (./preview.sh) y de haber ejecutado export_json.py.',
      pron_participant: 'Participante',
      pron_no_results_for: 'Sin resultados para',
      pron_close: 'Cerrar',
      pron_goal_sg: 'gol',
      pron_goal_pl: 'goles',

      // premios.html
      prem_doc_title: 'Premios — Veletoporra Mundial 2026',
      prem_subtitle: '¿Qué hay en juego?',
      prem_edition_note: '<strong>Premios Mundial 2026 confirmados.</strong> Patrocinadores y premios reales para esta edición.',
      prem_hero_title: 'Premios Veletoporra',
      prem_hero_sub: 'Metálico, experiencias y regalos de nuestros patrocinadores. Aquí todo el mundo tiene opciones.',
      prem_sec_bote: 'El bote — premios en metálico',
      prem_sec_categoria: 'Premios de categoría',
      prem_sec_posicion: 'Premios de posición — cortesía de patrocinadores',
      prem_sec_especiales: 'Premios especiales',
      prem_now: 'Ahora: ',
      prem_org: 'De la organización'
    },

    en: {
      // Common
      nav_clasificacion: '📊 Standings',
      nav_pronosticos:   '🔮 Predictions',
      nav_premios:       '🏆 Prizes',
      lang_switch_title: 'Cambiar a español',
      lang_switch_label: '🌐 ES',
      result_sg: 'result',
      result_pl: 'results',
      no_results: 'No results',
      visit: 'Visit →',

      // index.html
      idx_doc_title:   'Veletoporra World Cup 2026 — Standings',
      idx_fase_fallback: 'Overall Standings',
      idx_demo_fase:   'Demo — Tournament not started',
      idx_last_update: 'Last update',
      idx_stat_participants: 'Participants',
      idx_stat_leader: 'Leader',
      idx_stat_leader_pts: 'Leader points',
      idx_stat_you: 'Your position',
      idx_search_ph: 'Search your name or alias…',
      idx_th_pos_title: 'Position',
      idx_th_mov: 'Chg',
      idx_th_mov_title: 'Change vs yesterday',
      idx_th_name: 'Name',
      idx_th_total: 'Total',
      idx_th_groups: 'Groups',
      idx_th_elim: 'KO',
      idx_th_picm: 'TS.W',
      idx_th_picm_title: 'World top scorer',
      idx_th_pice: 'TS.E',
      idx_th_pice_title: 'Spain top scorer',
      idx_loading: 'Loading standings…',
      idx_no_match: 'No matching participants.',
      idx_detail_empty: 'Breakdown available once the tournament starts.',
      idx_col_real: 'actual',
      idx_col_pron: 'pred',
      idx_col_pts: 'pts',
      idx_subtotal: 'Subtotal',
      idx_pichichi: 'Top scorer',
      idx_pic_m1: '🌍 World 1st: ',
      idx_pic_m1_title: 'Preferred pick — double points if correct',
      idx_pic_m2: '🌍 World 2nd: ',
      idx_pic_m2_title: 'Secondary pick',
      idx_pic_esp: '🇪🇸 Spain: ',
      idx_view_detail: 'See match-by-match breakdown',
      idx_sponsors_label: 'Sponsors',
      idx_sponsor_badge: 'Sponsor',

      // pronosticos.html
      pron_doc_title: 'Veletoporra World Cup 2026 — Predictions',
      pron_subtitle: 'Predictions',
      pron_search_ph: 'Search your name or another participant…',
      pron_empty_title: 'Check the predictions',
      pron_empty_sub: 'Type your name in the search box to see all your predictions.<br>You can also look up any other participant.',
      pron_err_title: 'Couldn\'t load the predictions file',
      pron_err_sub: 'Make sure you open this page from the local server (./preview.sh) and have run export_json.py.',
      pron_participant: 'Participant',
      pron_no_results_for: 'No results for',
      pron_close: 'Close',
      pron_goal_sg: 'goal',
      pron_goal_pl: 'goals',

      // premios.html
      prem_doc_title: 'Prizes — Veletoporra World Cup 2026',
      prem_subtitle: 'What\'s at stake?',
      prem_edition_note: '<strong>World Cup 2026 prizes confirmed.</strong> Real sponsors and prizes for this edition.',
      prem_hero_title: 'Veletoporra Prizes',
      prem_hero_sub: 'Cash, experiences and gifts from our sponsors. Everyone has a shot here.',
      prem_sec_bote: 'The pot — cash prizes',
      prem_sec_categoria: 'Category prizes',
      prem_sec_posicion: 'Position prizes — courtesy of our sponsors',
      prem_sec_especiales: 'Special prizes',
      prem_now: 'Now: ',
      prem_org: 'From the organisers'
    }
  };

  const LANG = localStorage.getItem('vtp_lang') || 'es';

  function t(key) {
    const d = STR[LANG] || STR.es;
    return (key in d) ? d[key] : (STR.es[key] != null ? STR.es[key] : key);
  }

  function setLang(l) {
    localStorage.setItem('vtp_lang', l);
    location.reload();
  }

  // Nombres de selecciones ES → EN (datos del JSON de pronósticos).
  const TEAMS = {
    'Alemania': 'Germany', 'Arabia Saudí': 'Saudi Arabia', 'Argelia': 'Algeria',
    'Argentina': 'Argentina', 'Australia': 'Australia', 'Austria': 'Austria',
    'Bosnia y Herzegovina': 'Bosnia and Herzegovina', 'Brasil': 'Brazil', 'Bélgica': 'Belgium',
    'Cabo Verde': 'Cape Verde', 'Canadá': 'Canada', 'Catar': 'Qatar', 'Colombia': 'Colombia',
    'Corea del Sur': 'South Korea', 'Costa de Marfil': 'Ivory Coast', 'Croacia': 'Croatia',
    'Curazao': 'Curaçao', 'Ecuador': 'Ecuador', 'Egipto': 'Egypt', 'Escocia': 'Scotland',
    'España': 'Spain', 'Estados Unidos': 'United States', 'Francia': 'France', 'Ghana': 'Ghana',
    'Haití': 'Haiti', 'Inglaterra': 'England', 'Irak': 'Iraq', 'Irán': 'Iran', 'Japón': 'Japan',
    'Jordania': 'Jordan', 'Marruecos': 'Morocco', 'México': 'Mexico', 'Noruega': 'Norway',
    'Nueva Zelanda': 'New Zealand', 'Panamá': 'Panama', 'Paraguay': 'Paraguay',
    'Países Bajos': 'Netherlands', 'Portugal': 'Portugal', 'RD del Congo': 'DR Congo',
    'República Checa': 'Czech Republic', 'Senegal': 'Senegal', 'Sudáfrica': 'South Africa',
    'Suecia': 'Sweden', 'Suiza': 'Switzerland', 'Turquía': 'Türkiye', 'Túnez': 'Tunisia',
    'Uruguay': 'Uruguay', 'Uzbekistán': 'Uzbekistan'
  };

  // Traduce el nombre de una selección. En español devuelve el original.
  function team(name) {
    if (LANG === 'es' || !name) return name;
    const k = String(name).trim();
    return TEAMS[k] || name;
  }

  // Traduce un emparejamiento "A - B" (o una selección suelta).
  function teams(str) {
    if (LANG === 'es' || !str) return str;
    return String(str).includes(' - ')
      ? str.split(' - ').map(s => team(s.trim())).join(' - ')
      : team(str);
  }

  // Traduce etiquetas de partido/ronda de las eliminatorias y del pichichi.
  function matchLabel(text) {
    if (LANG === 'es' || !text) return text;
    let s = String(text);
    const map = [
      [/Dieciseisavos/gi, 'Round of 32'],
      [/Octavos/gi, 'Round of 16'],
      [/Cuartos/gi, 'Quarter-final'],
      [/Semifinales/gi, 'Semi-final'],
      [/Tercer Puesto/gi, 'Third place'],
      [/Tercer Clasificado/gi, 'Third place'],
      [/Mundial 1ª/gi, 'World 1st'],
      [/Mundial 2ª/gi, 'World 2nd'],
      [/\bEspaña\b/gi, 'Spain'],
      [/\bCampe[oó]n\b/gi, 'Champion'],
      [/\bFinal\b/gi, 'Final']
    ];
    map.forEach(([re, rep]) => { s = s.replace(re, rep); });
    return s;
  }

  // Traductor ligero de nombres de fase/partido provenientes del JSON (datos).
  // En español devuelve el texto tal cual; en inglés aplica reemplazos comunes.
  function phase(text) {
    if (LANG === 'es' || !text) return text;
    let s = String(text);
    const map = [
      // Frases completas primero (orden importa).
      [/Fase de Grupos/gi, 'Group Stage'],
      [/Clasificaci[oó]n General/gi, 'Overall Standings'],
      [/Dieciseisavos de Final/gi, 'Round of 32'],
      [/Octavos de Final/gi, 'Round of 16'],
      [/Cuartos de final/gi, 'Quarter-finals'],
      [/Semifinales/gi, 'Semi-finals'],
      [/Semifinal/gi, 'Semi-final'],
      [/Tercer y Cuarto(?:\s+Puesto)?/gi, 'Third place'],
      [/Tercer Clasificado/gi, 'Third place'],
      [/Final y Campe[oó]n/gi, 'Final & Champion'],
      [/Pichichi Mundial/gi, 'World top scorer'],
      [/Pichichi Espa[nñ]ol/gi, 'Spain top scorer'],
      // Tokens sueltos después.
      [/\bJornada\b/gi, 'Matchday'],
      [/\bGrupo\b/gi, 'Group'],
      [/Eliminatorias/gi, 'Knockouts'],
      [/Eliminatoria/gi, 'Knockout'],
      [/\bPichichi\b/gi, 'Top scorer'],
      [/\bCampe[oó]n\b/gi, 'Champion'],
      [/\bFinal\b/gi, 'Final']
    ];
    map.forEach(([re, rep]) => { s = s.replace(re, rep); });
    return s;
  }

  // Aplica traducciones al HTML estático marcado con atributos data-i18n*.
  function applyStatic(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(elm => {
      elm.textContent = t(elm.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-html]').forEach(elm => {
      elm.innerHTML = t(elm.getAttribute('data-i18n-html'));
    });
    root.querySelectorAll('[data-i18n-ph]').forEach(elm => {
      elm.setAttribute('placeholder', t(elm.getAttribute('data-i18n-ph')));
    });
    root.querySelectorAll('[data-i18n-title]').forEach(elm => {
      elm.setAttribute('title', t(elm.getAttribute('data-i18n-title')));
    });
  }

  // Inserta el botón de cambio de idioma en la nav del header.
  function injectToggle() {
    const nav = document.querySelector('.header-nav');
    if (!nav || nav.querySelector('#lang-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'lang-toggle';
    btn.className = 'nav-pill lang-pill';
    btn.type = 'button';
    btn.textContent = t('lang_switch_label');
    btn.title = t('lang_switch_title');
    btn.addEventListener('click', () => setLang(LANG === 'es' ? 'en' : 'es'));
    nav.appendChild(btn);
  }

  function boot() {
    document.documentElement.lang = LANG;
    applyStatic(document);
    injectToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // API global para los scripts de cada página.
  window.I18N = { LANG, t, phase, team, teams, matchLabel, setLang, applyStatic };
})();
