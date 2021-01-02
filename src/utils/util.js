// 存储localStorage
export const setStore = (name, content) => {
  if (!name) return
  localStorage.setItem(name, JSON.stringify(content))
}

// 获取localStorage
export const getStore = name => {
  if (!name) return
  return JSON.parse(localStorage.getItem(name))
}

export function removeSpace(value) {
  return value.replace(/\s+/g, '')
}

export function formValidate(val, type) {
  const phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
  const emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  if (val === '') {
    return false
  } else {
    // 非空验证
    if (type === 'require') {
      return !!removeSpace(val)
    }
    if (type === 'phone') {
      return phoneReg.test(val)
    }
    if (type === 'email') {
      return emailReg.test(val)
    }
  }
}

// 获取url参数
export function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}

// 数组去重
export function dedupe(array) {
  return Array.from(new Set(array))
}

export const ModalHelper = ((bodyCls) => {
  let scrollTop
  return {
    afterOpen: function () {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function () {
      document.body.classList.remove(bodyCls)
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = scrollTop
    }
  }
})('dialog-open')
