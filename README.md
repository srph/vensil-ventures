# vensils-ventures
> Website for Vensil's Ventures Photobooth, built with ReactJS.

I've made countless experiments with Sass in this project. If you will, I have a few points to note: the good sides, THE painful sides, and some difficult design decisions I took.

**Sass is awesome**. Alright, I said it. I somehow just ditched SASS for LESS last year. And then, recently, I just fell in love with Sass. One primary thing that made me turn my back from LESS is that it doesn't have a good `@import` globbing support (tho, I found the globbing plugin for useful). Bourbon / Neat are also awesome tools which life so ez.

**Mixins > Reusable classes**. Mixins encouraged reusability while allowing flexibility. Reusable classes are bad because it's harder to track the styling of a selector. Building UI without a framework is an advisable way to survive CSS.

Besides expressing my love for mixin, I have also yet to shout how `extend` is likeable. I noticed how some components would be better off *extended* (`@extend`) instead of *included as a mixin* (`@include`. I've noticed that *flexible* mixins are pretty hard to maintain. Although, I've seen a good way from Bourbon / Neat to make mixins flexible; semantics are easier to play with compared to arguments.

**To nest or not to nest**. That is the question. It's arguable that overnesting (more than the ideal nest of 2) makes code unreadable.

I experienced that making stuff farther (placing the selector stlying below the parent selector instead of being nested inside the selector) than it should've been makes the code unreadable.

```scss
.about {
  .about__card { }
  .about__card > .about__card__thumbnail { }
  .about__card > .about__card__info {
  .about__card > .about__card__info > .about__card__info__title { } 
  .about__card > .about__card__info > .about__card__info__subtitle { }
}
```

Nesting is awesome.

```scss
// Sometimes awesome
.about {
  .about__card {
    > .about__card__thumbnaul { }
    > .about__card__info {
      > .about__card__info__title { } 
      > .about__card__info__subtitle { }
    }
  }
}

But there's no code in the given example which makes it "easier" to read.

Also, I realized that I'm using BEM. B-E-fucking-M. Why am I trying to use `>` when it's not even necessary?
```

## Contribution
Looking forward to contribute any bugs you found? Feel free to submit a PR or issue. Don't forget to check the [contribution guidelines](CONTRIBUTING.md).

## Acknowledgement
**vensils-ventures** © 2015+, Kier Borromeo (srph) and [Vensil's Ventures Photo Booth](https://www.facebook.com/vensilsventuresPHOTOBOOTH).
