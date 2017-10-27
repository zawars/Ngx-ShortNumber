# Short Number Pipe

Angular Pipe for converting numbers into K,M,B format. For example, `1500` => `1.5K`

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

`<span>{{ youtube.channel.subscribers | shortNumber }}</span>`


## Credits

* Creator: [Zawar Shahid](https://github.com/zawars).
