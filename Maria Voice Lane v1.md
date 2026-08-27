# Maria Voice Lane v1

Purpose: give Maria a consistent, premium voice without relying on browser speech voices.

## Launch Rule

The public GitHub Pages site must not contain an OpenAI API key. Voice files are generated locally or through a secure backend, then approved MP3 clips are uploaded as static assets.

## Approved Clips

- `assets/audio/maria-welcome.mp3`
- `assets/audio/maria-vehicle-selected.mp3`
- `assets/audio/maria-confirm-details.mp3`
- `assets/audio/maria-consent-payment.mp3`
- `assets/audio/maria-handoff-ready.mp3`

The site checks for `maria-welcome.mp3`. If the approved audio is not present yet, Maria stays text-only and the voice button remains hidden.

## Recommended OpenAI TTS Direction

- Provider: OpenAI
- Model target: `gpt-4o-mini-tts`
- First voice test: `marin`
- Backup voice test: `cedar`
- Tone: warm, calm, concise, luxury concierge

## Customer Experience

Maria does not autoplay. The visitor taps the audio button if they want to hear the current approved prompt. This avoids mobile autoplay restrictions and prevents device/browser voice surprises.

The public button remains hidden until `assets/audio/maria-welcome.mp3` exists on the deployed site.

## Future Backend Lane

Dynamic voice replies should run through a backend/proxy so secrets stay off GitHub Pages. Static clips are the launch-safe lane.
