# ShortNumberPipe

Number converter into K,M,B format. For example, `1500` => `1.5K`

## Installation

`npm install --save ngx-short-number-pipe`

## Usage

* Import `ngx-short-number-pipe` into `app.module.ts`

`import { ShortNumberModule } from 'ngx-short-number-pipe`;`

and then add it into imports section
```
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShortNumberModule,  //here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Example

`<span>{{ facebook.post.likes | shortNumber }}</span>`


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
