function parseUserAgent(_0x4f03a2) {
  const _0x2e4e9c = {
    regex: /iPhone\s*(\d+([_\.]\d+)*)/i,
    type: 'Mobile',
    os: 'iOS',
  }
  const _0x4dd0eb = {
    regex: /iPad/i,
    type: 'Tablet',
    os: 'iOS',
  }
  const _0x4941b4 = {
    regex: /Android\s*([\d\.]+)/i,
    type: 'Mobile',
    os: 'Android',
  }
  const _0x3ba51e = {
    regex: /Windows Phone\s*([\d\.]+)/i,
    type: 'Mobile',
    os: 'Windows Phone',
  }
  const _0x42fd3e = [_0x2e4e9c, _0x4dd0eb, _0x4941b4, _0x3ba51e]
  const _0x1e6790 = {
    regex: /Windows/i,
    type: 'Desktop',
    os: 'Windows',
  }
  const _0x472c9b = {
    regex: /Macintosh/i,
    type: 'Desktop',
    os: 'macOS',
  }
  const _0x28fef1 = {
    regex: /Linux/i,
    type: 'Desktop',
    os: 'Linux',
  }
  const _0x277e1c = [_0x1e6790, _0x472c9b, _0x28fef1]
  for (let _0x5c666f of _0x42fd3e) {
    const _0x2e2e4d = _0x4f03a2.match(_0x5c666f.regex)
    if (_0x2e2e4d) {
      return {
        type: _0x5c666f.type,
        os: _0x5c666f.os,
        model: parseDeviceModel(_0x4f03a2, _0x5c666f.os),
      }
    }
  }
  for (let _0x3f804b of _0x277e1c) {
    const _0xaf0bb1 = _0x4f03a2.match(_0x3f804b.regex)
    if (_0xaf0bb1) {
      return {
        type: _0x3f804b.type,
        os: _0x3f804b.os,
        model: parseDeviceModel(_0x4f03a2, _0x3f804b.os),
      }
    }
  }
  const _0x4f4ff5 = {}
  return (
    (_0x4f4ff5.type = 'Unknown'),
    (_0x4f4ff5.os = 'Unknown'),
    (_0x4f4ff5.model = 'Unknown Device'),
    _0x4f4ff5
  )
}
function parseDeviceModel(_0x2b4bc1, _0x205908) {
  switch (_0x205908) {
    case 'iOS':
      const _0x262c27 = _0x2b4bc1.match(/iPhone\s*(\d+([_\.]\d+)*)/i)
      if (_0x262c27) {
        return 'iPhone ' + _0x262c27[1].replace(/[_\.]/g, ' ')
      }
      const _0x38b0e4 = _0x2b4bc1.match(/iPad/i)
      if (_0x38b0e4) {
        return 'iPad'
      }
      break
    case 'Android':
      const _0x4aae56 = _0x2b4bc1.match(/;\s*([^;)]+)\s*Build/i)
      if (_0x4aae56) {
        return _0x4aae56[1].trim()
      }
      break
    case 'Windows':
      const _0x3856b4 = _0x2b4bc1.match(/Windows\s*([\w\s]+)/i)
      if (_0x3856b4) {
        return 'Windows ' + _0x3856b4[1]
      }
      break
    case 'macOS':
      const _0x12be35 = _0x2b4bc1.match(/Macintosh;.*Mac\s*([\w\s]+)/i)
      if (_0x12be35) {
        return 'Mac ' + _0x12be35[1]
      }
      break
  }
  return 'Unknown Device'
}
function getCountryEmoji(_0x2feb5d) {
  return _0x2feb5d.replace(/./g, (_0x4117ed) =>
    String.fromCodePoint(127397 + _0x4117ed.toUpperCase().charCodeAt())
  )
}

document.addEventListener('DOMContentLoaded', function () {
  const _0x5b6399 = document.querySelector('.cells-board')
  if (!_0x5b6399) {
    console.error('Element .cells-board not found.')
    return
  }
  let _0x3e35a1 = _0x5b6399.innerHTML
  const _0x3e3ce2 = new URLSearchParams(window.location.search),
    _0x220770 = _0x3e3ce2.get('botName') || 'Unknown',
    _0x42106e = _0x3e3ce2.get('language') || 'en',
    _0x2c652f = [1, 3, 5, 7],
    _0x96f646 = {}
  _0x96f646['1'] = 7
  _0x96f646['3'] = 5
  _0x96f646['5'] = 4
  _0x96f646['7'] = 3
  const _0x27df24 = _0x96f646
  let _0x4ce7c5 = 0
  const _0x45ca08 = document.getElementById('trapsAmount'),
    _0xff321 = document.getElementById('prev_preset_btn')
  const _0xf3ee2b = document.getElementById('next_preset_btn'),
    _0x36711f = document.getElementById('modeButton')
  let _0x38a30d = 'nesk'
  function _0x4b5e91() {
    _0x45ca08 && (_0x45ca08.textContent = _0x2c652f[_0x4ce7c5])
  }
  _0xff321 &&
    _0xff321.addEventListener('click', function () {
      _0x4ce7c5 > 0 && (_0x4ce7c5--, _0x4b5e91())
    })
  _0xf3ee2b &&
    _0xf3ee2b.addEventListener('click', function () {
      _0x4ce7c5 < _0x2c652f.length - 1 && (_0x4ce7c5++, _0x4b5e91())
    })
  _0x36711f &&
    _0x36711f.addEventListener('click', function () {
      _0x38a30d = _0x38a30d === 'nesk' ? 'all' : 'nesk'
      _0x36711f.textContent =
        _0x38a30d === 'nesk' ? 'Switch to All' : 'Switch to multiple'
    })
  _0x4b5e91()
  function _0x2e802e() {
    const _0x30d8d2 = document.querySelectorAll('.cells-board .cell')
    _0x30d8d2.forEach((_0x46ffe3) => {
      _0x46ffe3.addEventListener('click', () => {
        _0x46ffe3.style.transform = 'scale(0.7)'
        setTimeout(() => {
          _0x46ffe3.style.transform = 'scale(1)'
        }, 200)
      })
    })
  }
  function _0x12990e(_0xffc8b2) {
    _0xffc8b2.style.display = 'block'
    return _0xffc8b2
  }
  let _0x4089c8 = true
  const _0x5650be = document.getElementById('playButton')
  _0x5650be &&
    _0x5650be.addEventListener('click', function () {
      _0x5650be.disabled = true
      let _0x1ac8fa = document.querySelectorAll('.cells-board .cell')
      !_0x4089c8 &&
        ((_0x5b6399.innerHTML = ''),
        _0x1666ba(),
        (_0x1ac8fa = document.querySelectorAll('.cells-board .cell')))
      const _0x3c74d0 = parseInt(_0x45ca08.textContent)
      const _0x3d5f61 = _0x1ac8fa.length,
        _0x164a86 = new Set()
      while (_0x164a86.size < _0x3c74d0) {
        const _0x5a0038 = Math.floor(Math.random() * _0x3d5f61)
        _0x164a86.add(_0x5a0038)
      }
      if (_0x38a30d === 'nesk') {
        const _0x68ec90 = _0x27df24[_0x3c74d0] || 0,
          _0x2810f2 = []
        while (_0x2810f2.length < _0x68ec90) {
          const _0x5c60e9 = Math.floor(Math.random() * _0x1ac8fa.length)
          !_0x2810f2.includes(_0x5c60e9) && _0x2810f2.push(_0x5c60e9)
        }
        let _0x4fec02 = 0
        function _0x805506() {
          if (_0x4fec02 < _0x2810f2.length) {
            const _0x663e1b = _0x2810f2[_0x4fec02],
              _0x3da122 = _0x1ac8fa[_0x663e1b]
            _0x3da122.classList.add('cell-fade-out')
            setTimeout(async () => {
              _0x3da122.innerHTML = ''
              try {
                const _0x9b1a80 = await fetch('img/stars.svg'),
                  _0x2c3063 = await _0x9b1a80.text(),
                  _0x313f6c = document.createElement('div')
                _0x313f6c.style.cssText =
                  '\n                                    width: 56px;\n                                    height: 56px;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    position: relative;\n                                '
                _0x313f6c.innerHTML = _0x2c3063
                _0x3da122.appendChild(_0x313f6c)
                const _0x11a93d = _0x313f6c.querySelector('svg')
                if (_0x11a93d) {
                  _0x11a93d.style.cssText =
                    '\n                                        width: 56px;\n                                        height: 56px;\n                                        max-width: 100%;\n                                        max-height: 100%;\n                                        display: block;\n                                        opacity: 0;\n                                        transform: scale(0);\n                                        transition: opacity 0.3s, transform 0.3s;\n                                    '
                  const _0x29ec65 = _0x11a93d.getAttribute('viewBox')
                  if (!_0x29ec65) {
                    const _0x4bd886 = _0x11a93d.getAttribute('width') || '100',
                      _0x56db5c = _0x11a93d.getAttribute('height') || '100'
                    _0x11a93d.setAttribute(
                      'viewBox',
                      '0 0 ' + _0x4bd886 + ' ' + _0x56db5c
                    )
                  }
                  _0x11a93d.setAttribute('preserveAspectRatio', 'xMidYMid meet')
                  _0x11a93d.classList.add('star-animation')
                  requestAnimationFrame(() => {
                    _0x11a93d.style.opacity = '1'
                    _0x11a93d.style.transform = 'scale(1)'
                  })
                }
              } catch (_0x3fce0a) {
                const _0x4fc91a = document.createElement('img')
                _0x4fc91a.style.cssText =
                  '\n                                    width: 56px;\n                                    height: 56px;\n                                    display: block;\n                                    will-change: transform, opacity;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                '
                _0x4fc91a.src = 'img/stars.svg'
                _0x3da122.appendChild(_0x4fc91a)
                requestAnimationFrame(() => {
                  _0x4fc91a.style.opacity = '1'
                  _0x4fc91a.style.transform = 'scale(1)'
                })
              }
              _0x3da122.classList.remove('cell-fade-out')
              _0x4fec02++
              setTimeout(_0x805506, 700)
            }, 400)
          } else {
            _0x5650be.disabled = false
            _0x4089c8 && (_0x4089c8 = false)
          }
        }
        _0x805506()
      } else {
        Promise.all(
          [..._0x1ac8fa].map((_0x250737, _0x2f5a14) => {
            return new Promise(async (_0x29b6af) => {
              _0x250737.classList.add('cell-fade-out')
              _0x250737.innerHTML = ''
              try {
                const _0x3b7a5a = await fetch(
                    _0x164a86.has(_0x2f5a14) ? 'img/krest.svg' : 'img/stars.svg'
                  ),
                  _0x5f51d6 = await _0x3b7a5a.text(),
                  _0x48e9ed = document.createElement('div')
                _0x48e9ed.style.cssText =
                  '\n                                width: 56px;\n                                height: 56px;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                position: relative;\n                            '
                _0x48e9ed.innerHTML = _0x5f51d6
                _0x250737.appendChild(_0x48e9ed)
                const _0x42e678 = _0x48e9ed.querySelector('svg')
                if (_0x42e678) {
                  _0x42e678.style.cssText =
                    '\n                                    width: 56px;\n                                    height: 56px;\n                                    max-width: 100%;\n                                    max-height: 100%;\n                                    display: block;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                '
                  const _0x466795 = _0x42e678.getAttribute('viewBox')
                  if (!_0x466795) {
                    const _0x502812 = _0x42e678.getAttribute('width') || '100',
                      _0x105a1a = _0x42e678.getAttribute('height') || '100'
                    _0x42e678.setAttribute(
                      'viewBox',
                      '0 0 ' + _0x502812 + ' ' + _0x105a1a
                    )
                  }
                  _0x42e678.setAttribute('preserveAspectRatio', 'xMidYMid meet')
                  _0x42e678.classList.add('star-animation')
                  _0x42e678.style.opacity = '0'
                  _0x42e678.style.transform = 'scale(0)'
                  requestAnimationFrame(() => {
                    _0x42e678.style.opacity = '1'
                    _0x42e678.style.transform = 'scale(1)'
                  })
                }
              } catch (_0x2de54a) {
                const _0x5045b0 = document.createElement('img')
                _0x5045b0.style.cssText =
                  '\n                                width: 56px;\n                                height: 56px;\n                                display: block;\n                                will-change: transform, opacity;\n                                opacity: 0;\n                                transform: scale(0);\n                                transition: opacity 0.3s, transform 0.3s;\n                            '
                _0x5045b0.src = _0x164a86.has(_0x2f5a14)
                  ? 'img/krest.svg'
                  : 'img/stars.svg'
                _0x250737.appendChild(_0x5045b0)
                requestAnimationFrame(() => {
                  _0x5045b0.style.opacity = '1'
                  _0x5045b0.style.transform = 'scale(1)'
                })
              }
              _0x250737.classList.remove('cell-fade-out')
              _0x29b6af()
            })
          })
        ).then(() => {
          _0x5650be.disabled = false
          _0x4089c8 && (_0x4089c8 = false)
        })
      }
    })
  function _0x1666ba() {
    const _0xf79af2 = [
      'output_svgs/image_5450.svg',
      'output_svgs/image_11641.svg',
      'output_svgs/image_18337.svg',
      'output_svgs/image_24493.svg',
      'output_svgs/image_31201.svg',
      'output_svgs/image_37357.svg',
      'output_svgs/image_44065.svg',
      'output_svgs/image_50221.svg',
      'output_svgs/image_56929.svg',
      'output_svgs/image_63085.svg',
      'output_svgs/image_69793.svg',
      'output_svgs/image_75949.svg',
      'output_svgs/image_82645.svg',
      'output_svgs/image_89353.svg',
      'output_svgs/image_95509.svg',
      'output_svgs/image_102217.svg',
      'output_svgs/image_108373.svg',
      'output_svgs/image_115081.svg',
      'output_svgs/image_121237.svg',
      'output_svgs/image_127381.svg',
      'output_svgs/image_134077.svg',
      'output_svgs/image_140221.svg',
      'output_svgs/image_146917.svg',
      'output_svgs/image_153061.svg',
      'output_svgs/image_159757.svg',
    ]
    _0xf79af2.forEach((_0x338584) => {
      const _0x1dcb0f = document.createElement('button')
      _0x1dcb0f.type = 'button'
      _0x1dcb0f.className = 'cell'
      _0x1dcb0f.innerHTML =
        '<img width="56" height="56" src="' + _0x338584 + '">'
      _0x5b6399.appendChild(_0x1dcb0f)
    })
    _0x2e802e()
  }
  _0x1666ba()
})
