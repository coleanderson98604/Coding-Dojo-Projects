class Deck {
    constructor(){
        this.cards = ['1heart','1spade','1club','1diamond','2heart','2spade','2club','2diamond','3heart','3spade','3club','3diamond','4heart','4spade','4club','4diamond','5heart','5spade','5club','5diamond','6heart','6spade','6club','6diamond','7heart','7spade','7club','7diamond','8heart','8spade','8club','8diamond','9heart','9spade','9club','9diamond','10heart','10spade','10club','10diamond','Jackheart','Jackspade','Jackclub','Jackdiamond','Queenheart','Queenspade','Queenclub','Kingdiamond','Kingheart','Kingspade','Kingclub','Acediamond','Aceheart','Acespade','Aceclub','Acediamond']
    }
    shuffle(){
        var m = this.cards.length
        var t
        var i
        while(m){
            i = Math.floor(Math.random() * m--)
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        // console.log(cards)
        return this.cards
    }
    reset(){
        this.cards = ['1heart','1spade','1club','1diamond','2heart','2spade','2club','2diamond','3heart','3spade','3club','3diamond','4heart','4spade','4club','4diamond','5heart','5spade','5club','5diamond','6heart','6spade','6club','6diamond','7heart','7spade','7club','7diamond','8heart','8spade','8club','8diamond','9heart','9spade','9club','9diamond','10heart','10spade','10club','10diamond','Jackheart','Jackspade','Jackclub','Jackdiamond','Queenheart','Queenspade','Queenclub','Kingdiamond','Kingheart','Kingspade','Kingclub','Acediamond','Aceheart','Acespade','Aceclub','Acediamond']
        return this.cards
    }
    deal(draw){
        let i = draw
        var card = []
        let index = []
        while(i > 0){
            let z = Math.floor(Math.random() * this.cards.length)
            console.log(z)
            if(z in this.cards){
                card.push(this.cards[z])
                delete this.cards[z]
                for(let i = z; i < this.cards.length; i++){
                    this.cards[z] = this.cards[z + 1]
                }
                this.cards.pop()
                }
            i--
            }
        console.log(card)
        return card
    }
}
class Player extends Deck{
    constructor(name){
        super();
        this.name = name;
        this.hand = [];
    }
    discard(card){
        if(card in this.hand){
            console.log(`removing ${this.hand[card]}`)
            delete this.hand[card]
            for(let i = card; i < this.hand.length; i++){
                this.hand[i] = this.hand[i + 1]
            }
            this.hand.pop()
            console.log(this.hand)
        }
        else{
            console.log('you do not have that many cards')
        }
        return this
    }
    draw(draw){
        let drawn = super.deal(draw)
        let length = drawn.length
        let i = 0
        // console.log(drawn)
        while(i < length){
            this.hand.push(drawn[i])
            i++
        }
        // console.log(this.hand)
        return this
    }
}
const player1 = new Player('jimmy')
const deck = new Deck()
deck.shuffle()
// console.log(deck.cards)
player1.draw(4).discard(0)
// deck.reset()
// console.log(deck.cards)