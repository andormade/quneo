import Midium from 'midium';
import {RED_PADS, GREEN_PADS, HORIZONTAL_SLIDERS,
	VERTICAL_SLIDERS, LONG_SLIDER, ROTARY_LEFT,
	ROTART_RIGHT, DEFAULT_BRIGHTNESS, CHANNEL_GRID_MODE,
	CHANNEL_DRUM_MODE} from './constants';

export default class QuNeo extends Midium {
	constructor() {
		super('quneo');
	}

	lightUpPad(id, r = DEFAULT_BRIGHTNESS, g = DEFAULT_BRIGHTNESS) {
		this.noteOn(RED_PADS[id], r, CHANNEL_DRUM_MODE);
		this.noteOn(GREEN_PADS[id], g, CHANNEL_DRUM_MODE);
	}

	lightDownPad(id, r = DEFAULT_BRIGHTNESS, g = DEFAULT_BRIGHTNESS) {
		this.noteOff(RED_PADS[id], r, CHANNEL_DRUM_MODE);
		this.noteOff(GREEN_PADS[id], g, CHANNEL_DRUM_MODE);
	}

	lightDownAllPads() {
		this.allNotesOff();
	}

	setHorizontalSlider(id, value) {
		this.controlChange(HORIZONTAL_SLIDERS[id], value, CHANNEL_DRUM_MODE);
	}

	setVerticalSlider(id, value) {
		this.controlChange(VERTICAL_SLIDERS[id], value, CHANNEL_DRUM_MODE);
	}

	setLongSlider(value) {
		this.controlChange(LONG_SLIDER, value, CHANNEL_DRUM_MODE);
	}

	setRotaryLeft(value) {
		this.controlChange(ROTARY_LEFT, value, CHANNEL_DRUM_MODE);
	}

	setRotaryRight(value) {
		this.controlChange(ROTART_RIGHT, value, CHANNEL_DRUM_MODE);
	}
}
