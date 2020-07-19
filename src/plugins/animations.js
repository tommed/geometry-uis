import Konva from 'konva';

// eslint-disable-next-line no-unused-vars
class AnimationConfig {
    /**
     * Creates a new instance of an AnimationConfig
     * @param {string} type the known type of animation
     * @param {string} group the name of the animationGroup to apply this to
     * @param {Number} rate the rate/speed of this animation (value meaning relative to `type used)
     */
    constructor(type, group, rate) {
        this.type = type;
        this.group = group;
        this.rate = rate;
    }
}

class NullAnimation {
    start() {} // do nothing
}

/**
 * Build a spin animation
 * @param {Konva.Layer} layer the layer to apply this animation to
 * @param {AnimationConfig} config the configuration to build an animation from
 * @returns {Konva.Animation} the animation built
 */
class SpinAnimation {
    constructor(layer, config) {
        this.layer = layer;
        this.config = config;
    }
    /**
     * Start this animation against a list of shapes
     * @param {Konva.Shape[]} shapes all your shapes to animate
     */
    start(shapes) {
        const self = this;
        return new Konva.Animation(function (frame) {
            var angleDiff = (frame.timeDiff * self.config.rate) / 1000;
            shapes.forEach(shape => {
                shape.rotate(angleDiff);
            });
        }, self.layer).start();
    }
}

/**
 * Build an animation
 * @param {Konva.Layer} layer the layer to apply this animation to
 * @param {AnimationConfig} config the configuration to build an animation from
 * @returns {*} the animation (call .start on this instance)
 */
function AnimationFactory(layer, config) {
    switch (config.type) {
        case 'spin':
            return new SpinAnimation(layer, config);
        case 'none':
            return new NullAnimation();
        default:
            throw new Error(`Animation of type '${config.type}' is not known/supported.`);
    }
}

export default AnimationFactory;