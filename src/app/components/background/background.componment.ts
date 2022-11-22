import d_parameters from './bg.url';

class Background {

    d_parameters = d_parameters;
    backGroundType = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'`;
    width = `width='600'`;
    height = `height='600'`;
    viewBox = `viewBox='0 0 600 600'%3E%3Cpath`;
    fill = `fill='%23FFF'`;
    fillOpacity = `fill-opacity='0.4'`;

    constructor(
        width?: number,
        height?: number,
        viewBox?: number,
        fill?: string,
        fillOpacity?: number
    ) {
        this.width = width ? `width='${width}'` : this.width;
        this.height = height ? `height='${height}'` : this.height;
        this.viewBox = viewBox ? `viewBox='0 0 ${viewBox} ${viewBox}'%3E%3Cpath` : this.viewBox;
        this.fill = fill ? `fill='%23${fill}'` : this.fill;
        this.fillOpacity = fillOpacity ? `fill-opacity='${fillOpacity}'` : this.fillOpacity;
    }

    setBg(
        data: {
            width?: number,
            height?: number,
            viewBox?: number,
            fill?: string,
            fillOpacity?: number
        }
    ) {
        this.width = data.width ? `width='${data.width}'` : this.width;
        this.height = data.height ? `height='${data.height}'` : this.height;
        this.viewBox = data.viewBox ? `viewBox='0 0 ${data.viewBox} ${data.viewBox}'%3E%3Cpath` : this.viewBox;
        this.fill = data.fill ? `fill='%23${data.fill}'` : this.fill;
        this.fillOpacity = data.fillOpacity ? `fill-opacity='${data.fillOpacity}'` : this.fillOpacity;
    }

    getBg() {
        return `${this.backGroundType} ${this.width} ${this.height} ${this.viewBox} ${this.fill} ${this.fillOpacity} ${this.d_parameters}`;
    }

}

export default Background;