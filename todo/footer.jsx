import '../src/assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'Cynthia * xie'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}