# vensils-ventures
> Website for Vensil's Ventures Photobooth, built with ReactJS.

I've made countless experiments with Sass in this project. If you will, I have a few points to note: the good sides, THE painful sides, and some difficult design decisions I took.

**Sass is awesome**. Alright, I said it. I somehow just ditched SASS for LESS last year. And then, recently, I just fell in love with Sass. One primary thing that made me turn my back from LESS is that it doesn't have a good `@import` globbing support (tho, I found the globbing plugin for useful). Bourbon / Neat are also awesome tools which life so ez.

**Mixins > Reusable classes**. This encouraged reusability while allowing flexibility. Reusable classes are bad because it's harder to track the styling of a selector. However, I've also noticed how extend some components would be better off extending classes instead of using mixins (`@extend`); I've noticed that *flexible* mixins are pretty hard to maintain. And, again, however I've seen a good way from Bourbon / Neat to make mixins flexible; semantics are easier to play with compared to arguments.

## Contribution
Looking forward to contribute any bugs you found? Feel free to submit a PR or issue. Don't forget to check the [contribution guidelines](CONTRIBUTING.md).

## Acknowledgement
**vensils-ventures** © 2015+, Kier Borromeo (srph) and [Vensil's Ventures Photo Booth](https://www.facebook.com/vensilsventuresPHOTOBOOTH).
