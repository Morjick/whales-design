const toDiscuss = () => {
  let ofHead = window.scrollY

  window.onscroll = () => {
    console.log(ofHead)
  }
}

export default toDiscuss