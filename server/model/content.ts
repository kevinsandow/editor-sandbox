class ContentModel {
  private content: string

  constructor() {
    this.content = 'Dragée icing topping tootsie roll powder candy ice cream jujubes. Toffee dessert shortbread cookie soufflé marzipan dessert. Pudding fruitcake cheesecake cotton candy fruitcake chocolate bar bonbon jelly. Chocolate bar jelly-o jelly beans biscuit jelly-o pastry dessert. Pudding jelly beans sweet roll macaroon sweet gummies marzipan caramels. Tart tiramisu lollipop gummies jelly-o cake brownie carrot cake. Cheesecake icing soufflé tootsie roll chupa chups bonbon sesame snaps macaroon halvah. Dessert chocolate gingerbread gingerbread tiramisu. Topping liquorice biscuit cake topping topping cake. Cookie brownie sesame snaps dessert brownie cake sweet roll marshmallow. Apple pie oat cake apple pie oat cake dessert apple pie topping cotton candy cheesecake. Chocolate cake cheesecake dragée chocolate bar wafer dragée apple pie.\n\nCake cake muffin lollipop sweet roll. Liquorice tiramisu cake wafer powder tart croissant. Topping tiramisu gingerbread chocolate bar gingerbread soufflé sesame snaps. Wafer gummies tart croissant carrot cake cheesecake halvah lollipop dessert. Tiramisu marzipan apple pie donut candy canes bear claw ice cream fruitcake chupa chups. Gingerbread soufflé bonbon donut candy chocolate cake candy canes gummi bears. Chupa chups jelly beans shortbread bonbon shortbread jelly beans cheesecake jujubes jelly beans. Dessert muffin donut lollipop sugar plum gummies. Tootsie roll oat cake cupcake caramels cake tiramisu oat cake donut apple pie. Ice cream gummi bears halvah brownie pie cotton candy sesame snaps. Danish fruitcake toffee lemon drops chocolate cake oat cake. Donut powder gummi bears sugar plum dragée cookie. Tiramisu toffee lemon drops carrot cake sugar plum lemon drops bonbon. Jujubes toffee marzipan halvah biscuit halvah dragée halvah chocolate.'
  }

  getContent() {
    return this.content
  }

  updateContent(c: string) {
    this.content = c
  }
}

export default new ContentModel()
