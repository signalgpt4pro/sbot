function parseUserAgent(_0x4b2520) {
  const _0x2b5abd = {
    regex: /iPhone\s*(\d+([_\.]\d+)*)/i,
    type: 'Mobile',
    os: 'iOS',
  }
  const _0x2369d4 = {
    regex: /iPad/i,
    type: 'Tablet',
    os: 'iOS',
  }
  const _0xd1c5af = {
    regex: /Android\s*([\d\.]+)/i,
    type: 'Mobile',
    os: 'Android',
  }
  const _0x1d8f1a = {
    regex: /Windows Phone\s*([\d\.]+)/i,
    type: 'Mobile',
    os: 'Windows Phone',
  }
  const _0x16c376 = [_0x2b5abd, _0x2369d4, _0xd1c5af, _0x1d8f1a],
    _0x3088d9 = {
      regex: /Windows/i,
      type: 'Desktop',
      os: 'Windows',
    }
  const _0x10360d = {
    regex: /Macintosh/i,
    type: 'Desktop',
    os: 'macOS',
  }
  const _0x37b7b0 = {
    regex: /Linux/i,
    type: 'Desktop',
    os: 'Linux',
  }
  const _0x2745d4 = [_0x3088d9, _0x10360d, _0x37b7b0]
  for (let _0x545bfd of _0x16c376) {
    const _0x26e6f7 = _0x4b2520.match(_0x545bfd.regex)
    if (_0x26e6f7) {
      return {
        type: _0x545bfd.type,
        os: _0x545bfd.os,
        model: parseDeviceModel(_0x4b2520, _0x545bfd.os),
      }
    }
  }
  for (let _0x32164c of _0x2745d4) {
    const _0x943916 = _0x4b2520.match(_0x32164c.regex)
    if (_0x943916) {
      return {
        type: _0x32164c.type,
        os: _0x32164c.os,
        model: parseDeviceModel(_0x4b2520, _0x32164c.os),
      }
    }
  }
  const _0x59d0b0 = {}
  return (
    (_0x59d0b0.type = 'Unknown'),
    (_0x59d0b0.os = 'Unknown'),
    (_0x59d0b0.model = 'Unknown Device'),
    _0x59d0b0
  )
}
function parseDeviceModel(_0x3c8198, _0x49477d) {
  switch (_0x49477d) {
    case 'iOS':
      const _0x112986 = _0x3c8198.match(/iPhone\s*(\d+([_\.]\d+)*)/i)
      if (_0x112986) {
        return 'iPhone ' + _0x112986[1].replace(/[_\.]/g, ' ')
      }
      const _0x294717 = _0x3c8198.match(/iPad/i)
      if (_0x294717) {
        return 'iPad'
      }
      break
    case 'Android':
      const _0x204171 = _0x3c8198.match(/;\s*([^;)]+)\s*Build/i)
      if (_0x204171) {
        return _0x204171[1].trim()
      }
      break
    case 'Windows':
      const _0x4119af = _0x3c8198.match(/Windows\s*([\w\s]+)/i)
      if (_0x4119af) {
        return 'Windows ' + _0x4119af[1]
      }
      break
    case 'macOS':
      const _0x1e2cc5 = _0x3c8198.match(/Macintosh;.*Mac\s*([\w\s]+)/i)
      if (_0x1e2cc5) {
        return 'Mac ' + _0x1e2cc5[1]
      }
      break
  }
  return 'Unknown Device'
}
function getCountryEmoji(_0x5accb3) {
  return _0x5accb3.replace(/./g, (_0x569a51) =>
    String.fromCodePoint(127397 + _0x569a51.toUpperCase().charCodeAt())
  )
}

function createStars() {
  const _0x241f66 = document.querySelector('.stars')
  for (let _0x28f97b = 0; _0x28f97b < 300; _0x28f97b++) {
    const _0x3b9bf6 = document.createElement('div')
    _0x3b9bf6.className = 'star'
    const _0x3d0ba3 = Math.random() * 100,
      _0x5449d6 = Math.random() * 100,
      _0x4d6026 = Math.random() * 2,
      _0x2ed079 = 3 + Math.random() * 4
    _0x3b9bf6.style.left = _0x3d0ba3 + '%'
    _0x3b9bf6.style.top = _0x5449d6 + '%'
    _0x3b9bf6.style.width = _0x4d6026 + 'px'
    _0x3b9bf6.style.height = _0x4d6026 + 'px'
    _0x3b9bf6.style.setProperty('--duration', _0x2ed079 + 's')
    _0x241f66.appendChild(_0x3b9bf6)
  }
}
function toggleLangMenu() {
  const _0x4a4b26 = document.getElementById('lang-options')
  _0x4a4b26.classList.toggle('show')
}
const _0x290f57 = {}
_0x290f57.ru = 'ПК'
_0x290f57.en = 'PC'
_0x290f57.hi = 'पीसी'
_0x290f57.br = 'PC'
_0x290f57.es = 'PC'
_0x290f57.uz = 'PK'
_0x290f57.az = 'PC'
_0x290f57.tr = 'PC'
_0x290f57.pt = 'PC'
_0x290f57.ar = 'كمبيوتر'
const _0x5b29f6 = {}
_0x5b29f6.ru = 'Android'
_0x5b29f6.en = 'Android'
_0x5b29f6.hi = 'एन्ड्रोयड'
_0x5b29f6.br = 'Android'
_0x5b29f6.es = 'Android'
_0x5b29f6.uz = 'Android'
_0x5b29f6.az = 'Android'
_0x5b29f6.tr = 'Android'
_0x5b29f6.pt = 'Android'
_0x5b29f6.ar = 'أندرويد'
const _0x140c93 = {}
_0x140c93.ru = 'iOS'
_0x140c93.en = 'iOS'
_0x140c93.hi = 'आईओएस'
_0x140c93.br = 'iOS'
_0x140c93.es = 'iOS'
_0x140c93.uz = 'iOS'
_0x140c93.az = 'iOS'
_0x140c93.tr = 'iOS'
_0x140c93.pt = 'iOS'
_0x140c93.ar = 'آيفون'
const _0x29659a = {}
_0x29659a.pc = _0x290f57
_0x29659a.android = _0x5b29f6
_0x29659a.ios = _0x140c93
const deviceTexts = _0x29659a
function switchLanguage(_0x3e5d66) {
  const _0x1a85d4 = document.getElementById('current-flag')
  const _0x1375f2 = document.getElementById('current-lang-text'),
    _0xa21d35 = _0x3e5d66 === 'hi' ? 'hin' : _0x3e5d66
  _0x1a85d4.src = 'avas/' + _0xa21d35 + '.png'
  _0x1375f2.textContent = _0x3e5d66.toUpperCase()
  document.querySelectorAll('.play-button').forEach((_0x18a15d) => {
    _0x18a15d.textContent = _0x18a15d.getAttribute('data-' + _0x3e5d66)
  })
  document.documentElement.lang = _0x3e5d66
  document.getElementById('lang-options').classList.remove('show')
  const _0x14292c = document.getElementById('lang-options')
  _0x14292c.innerHTML = ''
  const _0x17191a = {
    code: 'ru',
    name: 'RU',
    file: 'ru',
  }
  const _0xeb7a32 = {
    code: 'en',
    name: 'EN',
    file: 'en',
  }
  const _0x2cc6de = {
    code: 'hi',
    name: 'हिन्दी (HI)',
    file: 'hin',
  }
  const _0x1ed5d6 = {
    code: 'br',
    name: 'PT-BR',
    file: 'br',
  }
  const _0xee5bfb = {
    code: 'es',
    name: 'ES',
    file: 'es',
  }
  const _0x329b0e = {
    code: 'uz',
    name: 'UZ',
    file: 'uz',
  }
  const _0x2b72df = {
    code: 'az',
    name: 'AZ',
    file: 'az',
  }
  const _0x4818fd = {
    code: 'tr',
    name: 'TR',
    file: 'tr',
  }
  const _0x4946de = {
    code: 'pt',
    name: 'PT',
    file: 'pt',
  }
  const _0x318763 = {
    code: 'ar',
    name: 'العربية',
    file: 'ar',
  }
  const _0x165d59 = [
      _0x17191a,
      _0xeb7a32,
      _0x2cc6de,
      _0x1ed5d6,
      _0xee5bfb,
      _0x329b0e,
      _0x2b72df,
      _0x4818fd,
      _0x4946de,
      _0x318763,
    ],
    _0x2ed8b9 = _0x165d59.filter((_0x498a42) => _0x498a42.code !== _0x3e5d66)
  _0x2ed8b9.forEach((_0x4289b4) => {
    _0x14292c.innerHTML +=
      '\n            <div class="lang-option" onclick="switchLanguage(\'' +
      _0x4289b4.code +
      '\')">\n                <img src="avas/' +
      _0x4289b4.file +
      '.png" alt="' +
      _0x4289b4.name +
      '" class="lang-flag">\n                <span class="lang-text">' +
      _0x4289b4.name +
      '</span>\n            </div>\n        '
  })
  updateDeviceInfo(_0x3e5d66)
}
function detectDevice() {
  const _0x5728ce = navigator.userAgent.toLowerCase()
  if (/android/i.test(_0x5728ce)) {
    return 'android'
  } else {
    if (/iphone|ipad|ipod/i.test(_0x5728ce)) {
      return 'ios'
    } else {
      return 'pc'
    }
  }
}
function updateDeviceInfo(_0x5a3703) {
  const _0x3390ef = detectDevice(),
    _0xb5e783 = document.getElementById('device-icon'),
    _0x551407 = document.getElementById('device-text')
  let _0xc386ba = _0x3390ef === 'pc' ? '\uD83D\uDCBB' : '\uD83D\uDCF1',
    _0x5db6ad = deviceTexts[_0x3390ef][_0x5a3703] || deviceTexts[_0x3390ef].en
  _0xb5e783.textContent = _0xc386ba
  _0x551407.textContent = _0x5db6ad
}
let lastScrollTop = 0
const topBar = document.querySelector('.top-bar')
let isHidden = false
window.addEventListener(
  'scroll',
  () => {
    const _0x2edea4 = window.pageYOffset || document.documentElement.scrollTop
    document.getElementById('lang-options').classList.remove('show')
    _0x2edea4 > lastScrollTop &&
      _0x2edea4 > 50 &&
      !isHidden &&
      (topBar.classList.add('hidden'), (isHidden = true))
    if (_0x2edea4 <= 0 && isHidden) {
      topBar.classList.remove('hidden')
      isHidden = false
    }
    lastScrollTop = _0x2edea4 <= 0 ? 0 : _0x2edea4
  },
  false
)
document.addEventListener('click', (_0x248e16) => {
  const _0x3453c9 = document.querySelector('.language-switcher')
  !_0x3453c9.contains(_0x248e16.target) &&
    document.getElementById('lang-options').classList.remove('show')
})
document.addEventListener('DOMContentLoaded', () => {
  createStars()
  switchLanguage('ru')
  updateDeviceInfo('ru')
  const _0x24cd8b = document.querySelectorAll('.play-button')
  _0x24cd8b.forEach((_0x3ebad2) => {
    _0x3ebad2.setAttribute('data-ru', 'ОТКРЫТЬ')
    _0x3ebad2.setAttribute('data-en', 'OPEN')
    _0x3ebad2.setAttribute('data-hi', 'खोलें')
    _0x3ebad2.setAttribute('data-br', 'ABRIR')
    _0x3ebad2.setAttribute('data-es', 'ABRIR')
    _0x3ebad2.setAttribute('data-uz', 'OCHISH')
    _0x3ebad2.setAttribute('data-az', 'AÇ')
    _0x3ebad2.setAttribute('data-tr', 'AÇ')
    _0x3ebad2.setAttribute('data-pt', 'ABRIR')
    _0x3ebad2.setAttribute('data-ar', 'فتح')
    _0x3ebad2.textContent = 'ОТКРЫТЬ'
  })
})
