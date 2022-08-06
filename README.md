# Shan Text To Speech (beta)

Built with text2wav + express + espeak-ng.
TTS rules are based on these [shn_list](https://github.com/espeak-ng/espeak-ng/blob/master/dictsource/shn_list) and [shn_rules](https://github.com/espeak-ng/espeak-ng/blob/master/dictsource/shn_rules) .

## API

```sh

/api/?text=ၸၢမ်းတူၺ်း

```

This will return based64 data.

[Demo](https://shantts.heroku.app)

-----------

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/haohaaorg/shan-text-to-speech)

#### Local 

```
npm install && npm run dev
```

------------

## Espeak-ng Contribution

[Shan Espeak-ng repo forked from espeak-ng](https://github.com/haohaaorg/espeak-ng)

## Credit
- Espeak-ng
- text2wav
