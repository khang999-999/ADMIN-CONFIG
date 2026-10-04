[
  {
    "enabled": true,
    "name": "CONFIG",
    "url": [
      "*/GetBackpack",
      "*/ABHotUpdates/*",
      "*/CheckHackBehavior",
      "*/GetMatchmakingBlacklist",
      "*/MajorLogin",
      "*/LogEvent",
      "*/AimAssist",
      "*/Sensitivity",
      "*.freefiremobile.com/*",
      "*.ggwhitehawk.com/*",
      "*.ggpolarbear.com/*",
      "*.ggblueshark.com/*",
      "*.appsflyersdk.com/*",
      "*.connect.garena.com/*",
      "cache/ff.com"
    ],
    "script": "/* ==========================================================\n   NSMOD CONFIG MODULE V11\n   Chức năng: Cấu hình chung, Headers, Bypass Anti-Cheat.\n   ========================================================== */\n\nvar NSMOD_CONFIG = {\n    DEBUG: true,\n    LOG_LEVEL: 'INFO',\n    HEADLOCK: {\n        ENABLED: true,\n        SENSITIVITY: 0.0,\n        SMOOTHING: 0.0,\n        ANTI_SHAKE: true,\n        SHAKE_THRESHOLD: 0.01\n    },\n    TARGETS: {\n        BACKPACK: 'GetBackpack',\n        HOT_UPDATE: 'ABHotUpdates',\n        ANTI_CHEAT: 'CheckHackBehavior',\n        MATCHMAKING: 'GetMatchmakingBlacklist',\n        LOGIN: 'MajorLogin',\n        EVENT: 'LogEvent',\n        DELIVERY: 'deliveryFlaglos',\n        AIM: 'AimAssist',\n        SENSITIVITY: 'Sensitivity'\n    },\n    FAKE_HEADERS: {\n        'User-Agent': 'GarenaFreeFire/1.130.18 (iPhone; iOS 17.0; Scale/3.00)',\n        'X-Unity-Version': '2021.3.14f1',\n        'Accept-Encoding': 'gzip, deflate, br',\n        'Content-Type': 'application/json',\n        'X-GA': 'v1',\n        'X-Requested-With': 'XMLHttpRequest'\n    }\n};\n\nfunction onRequest(request) {\n    if (request.headers) {\n        Object.assign(request.headers, NSMOD_CONFIG.FAKE_HEADERS);\n    }\n    if (request.url.includes(NSMOD_CONFIG.TARGETS.ANTI_CHEAT)) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.is_hacked = false;\n                body.cheat_detected = 0;\n                body.ban_time = 0;\n                body.reason = '';\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes(NSMOD_CONFIG.TARGETS.ANTI_CHEAT)) {\n                data = { status: 0, message: 'Clean', ban_time: 0, is_hacked: false };\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "DATA",
    "url": [
      "*/GetBackpack",
      "*/ABHotUpdates/*",
      "*/CheckHackBehavior"
    ],
    "script": "/* ==========================================================\n   NSMOD DATA MODULE V11\n   Chức năng: Xử lý dữ liệu Backpack, Vật phẩm, Kho đồ.\n   ========================================================== */\n\nvar NSMOD_DATA = {\n    REGION: 'VN',\n    PLATFORM: 'ios',\n    LANG: 'vi'\n};\n\nfunction onRequest(request) {\n    if (request.url.includes('GetBackpack')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.region = NSMOD_DATA.REGION;\n                body.platform = NSMOD_DATA.PLATFORM;\n                body.lang = NSMOD_DATA.LANG;\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes('GetBackpack')) {\n                if (data.items && Array.isArray(data.items)) {\n                    /* Chèn logic sửa item tại đây */\n                }\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "TUNDEVELOPED🇻🇳",
    "url": [
      "*/GetBackpack",
      "*/ABHotUpdates/*",
      "*/CheckHackBehavior"
    ],
    "script": "/* ==========================================================\n   NSMOD TUNDEVELOPED MODULE V11\n   Chức năng: Can thiệp sâu vào luồng Game, Bypass kiểm tra.\n   ========================================================== */\n\nfunction onRequest(request) {\n    if (request.url.includes('CheckHackBehavior')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.is_hacked = false;\n                body.cheat_detected = 0;\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    if (request.url.includes('ABHotUpdates')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.version = '1.130.18';\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes('CheckHackBehavior')) {\n                data = { status: 0, message: 'Clean', ban_time: 0 };\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "TUN DEVELOPED",
    "url": [
      "cache/ff.com",
      "*.freefiremobile.com/*",
      "*.ggwhitehawk.com/*"
    ],
    "script": "/* ==========================================================\n   NSMOD TUN DEVELOPED MODULE V11\n   Chức năng: Quản lý Cache, Đồng bộ dữ liệu, Tối ưu kết nối.\n   ========================================================== */\n\nfunction onRequest(request) {\n    if (request.url.includes('cache/ff.com')) {\n        if (request.headers) {\n            request.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';\n            request.headers['Pragma'] = 'no-cache';\n            request.headers['Expires'] = '0';\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.url.includes('cache/ff.com')) {\n        if (response.headers) {\n            response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';\n        }\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "HEADLOCK_ANTI_SHAKE",
    "url": [
      "*/AimAssist",
      "*/Sensitivity",
      "*/CheckHackBehavior"
    ],
    "script": "/* ==========================================================\n   NSMOD HEADLOCK & ANTI-SHAKE MODULE V11\n   Chức năng: Khóa tâm Head, Triệt rung tâm, Bypass Anti-Cheat.\n   ========================================================== */\n\nvar NSMOD_HEADLOCK = {\n    SENSITIVITY: 0.0,\n    SMOOTHING: 0.0,\n    ANTI_SHAKE: true,\n    SHAKE_THRESHOLD: 0.01\n};\n\nfunction onRequest(request) {\n    if (request.url.includes('AimAssist')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.sensitivity = NSMOD_HEADLOCK.SENSITIVITY;\n                body.smoothing = NSMOD_HEADLOCK.SMOOTHING;\n                body.lock_head = true;\n                body.anti_shake = NSMOD_HEADLOCK.ANTI_SHAKE;\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    if (request.url.includes('Sensitivity')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.shake_threshold = NSMOD_HEADLOCK.SHAKE_THRESHOLD;\n                body.filter_shake = true;\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes('AimAssist')) {\n                data = { status: 0, sensitivity: NSMOD_HEADLOCK.SENSITIVITY, smoothing: NSMOD_HEADLOCK.SMOOTHING, lock_head: true };\n            }\n            if (response.url.includes('Sensitivity')) {\n                data = { status: 0, shake_threshold: NSMOD_HEADLOCK.SHAKE_THRESHOLD, filter_shake: true };\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "MATCHMAKING_BYPASS",
    "url": [
      "*/GetMatchmakingBlacklist",
      "*/MajorLogin",
      "*/LogEvent"
    ],
    "script": "/* ==========================================================\n   NSMOD MATCHMAKING BYPASS MODULE V11\n   Chức năng: Xóa Blacklist, Bypass Matchmaking, Log Event.\n   ========================================================== */\n\nfunction onRequest(request) {\n    if (request.url.includes('MajorLogin')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.region = 'VN';\n                body.lang = 'vi';\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes('GetMatchmakingBlacklist')) {\n                data = { status: 0, blacklist: [] };\n            }\n            if (response.url.includes('LogEvent')) {\n                data = { status: 0, message: 'Logged' };\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "LOG_EVENT_FILTER",
    "url": [
      "*/LogEvent",
      "*/deliveryFlaglos"
    ],
    "script": "/* ==========================================================\n   NSMOD LOG EVENT FILTER MODULE V11\n   Chức năng: Lọc LogEvent, Can thiệp deliveryFlaglos.\n   ========================================================== */\n\nfunction onRequest(request) {\n    if (request.url.includes('deliveryFlaglos')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.region = 'VN';\n                body.status = 'delivered';\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes('LogEvent')) {\n                data = { status: 0, message: 'Logged' };\n            }\n            if (response.url.includes('deliveryFlaglos')) {\n                data = { status: 0, message: 'Delivered' };\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  },
  {
    "enabled": true,
    "name": "AIM_ASSIST_LOCK",
    "url": [
      "*/AimAssist",
      "*/Sensitivity"
    ],
    "script": "/* ==========================================================\n   NSMOD AIM ASSIST LOCK MODULE V11\n   Chức năng: Khóa tâm tự động, triệt rung nâng cao.\n   ========================================================== */\n\nvar NSMOD_AIM = {\n    LOCK_HEAD: true,\n    ANTI_SHAKE: true,\n    SENSITIVITY: 0.0,\n    SMOOTHING: 0.0\n};\n\nfunction onRequest(request) {\n    if (request.url.includes('AimAssist')) {\n        if (request.body) {\n            try {\n                var body = JSON.parse(request.body);\n                body.lock_head = NSMOD_AIM.LOCK_HEAD;\n                body.anti_shake = NSMOD_AIM.ANTI_SHAKE;\n                body.sensitivity = NSMOD_AIM.SENSITIVITY;\n                body.smoothing = NSMOD_AIM.SMOOTHING;\n                request.body = JSON.stringify(body);\n            } catch (e) {}\n        }\n    }\n    return request;\n}\n\nfunction onResponse(response) {\n    if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {\n        try {\n            var data = JSON.parse(response.body);\n            if (response.url.includes('AimAssist')) {\n                data = { status: 0, lock_head: true, anti_shake: true, sensitivity: 0.0, smoothing: 0.0 };\n            }\n            response.body = JSON.stringify(data);\n        } catch (e) {}\n    }\n    return response;\n}\n\nif (typeof module !== 'undefined') { module.exports = { onRequest, onResponse }; }"
  }
]