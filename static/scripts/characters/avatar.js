function AvatarSprite() {
    // Order of layers for avatar generation
    this.base;
    this.pants;
    this.boots;
    this.torso;
    this.hair;
    this.hat;
    this.beard;
    this.left;
    this.right;
    this.makeAvatar = (ctx, x = 0, y = 0, newW = allSpritesXL[0][0].w, newH = allSpritesXL[0][0].h)=>{
        if (!(ctx instanceof CanvasRenderingContext2D)){
            console.log("Not a canvas rendering instance");return;
        }
        
        // ctx.clearRect(0, 0, location.width, location.height);
        if (this.base) this.base.render(ctx,x,y,newW,newH);
        if (this.pants) this.pants.render(ctx,x,y,newW,newH);
        if (this.boots) this.boots.render(ctx,x,y,newW,newH);
        if (this.torso) this.torso.render(ctx,x,y,newW,newH);
        if (this.hair && !this.hat) this.hair.render(ctx,x,y,newW,newH);
        if (this.hat) this.hat.render(ctx,x,y,newW,newH);
        if (this.beard) this.beard.render(ctx,x,y,newW,newH);
        if (this.left) this.left.render(ctx,x,y,newW,newH);
        if (this.right) this.right.render(ctx,x,y,newW,newH);
    }
}

const races = ["elf", "hobbit", "human", "orc"]
const gender = ["male", "female"]
const hair_styles = ["short", "long", "fu_manchu", "default", "medium", "braid-left", "braid-right", "2braid", "bowl_stache", "topknot", "fro", "balding"]
const hair_colors = ["d_brown", "l_brown", "blonde", "black", "white"]
const beards = ["full", "stache", "ancient", "elder"]
//Base locations
    const bases = [
        { race: "elf", gender: "male", x: 0, y: 0 },
        { race: "elf", gender: "female", x: 1, y: 0 },
        { race: "hobbit", gender: "male", x: 0, y: 1 },
        { race: "hobbit", gender: "female", x: 1, y: 1 },
        { race: "human", gender: "male", x: 0, y: 2 },
        { race: "human", gender: "female", x: 1, y: 2 },
        { race: "orc", gender: "male", x: 0, y: 3 },
        { race: "orc", gender: "female", x: 1, y: 3 }
    ]
//Hair Layer locations
    const hair = [];
    let startLoc = [19, 0]
    let colorStart = [];
    for (let col = 0; col < hair_colors.length; col++) {
        if (col == 0 || col % 2 == 0) colorStart = [19, (col / 2) * 4]
        else colorStart = [23, ((col - 1) / 2) * 4]
        for (let style = 0; style < hair_styles.length; style++) {
            let obj = {};
            obj.style = hair_styles[style];
            obj.color = hair_colors[col];
            //calc location of each
            if (style == 0 || style % 4 == 0) obj.x = colorStart[0]
            else obj.x = colorStart[0] + (style % 4)
            obj.y = colorStart[1] + Math.floor(style / 4);
            hair.push(obj);
        }
    }

//Beard Layer locations
    const beard_layer = [];
    startLoc = [19, 3];
    for (let col = 0; col < hair_colors.length; col++) {
        if (col == 0 || col % 2 == 0) colorStart = [19, startLoc[1] + (4 * (col / 2))]
        else colorStart = [23, startLoc[1] + ((col - 1) / 2) * 4]
        for (let beard = 0; beard < beards.length; beard++) {
            let obj = {};
            obj.beard = beards[beard];
            obj.color = hair_colors[col];
            obj.x = colorStart[0] + beard
            obj.y = colorStart[1]
            beard_layer.push(obj);
        }
    }

class Avatar {
    constructor(race = "elf", gender = "male", hair = "short", hair_color = "d_brown", beard = "") {
        this.race = race;
        this.gender = gender;
        this.hair_style = hair;
        this.hair_color = hair_color;
        this.beard = beard;
        this.avatarSprite = new AvatarSprite();
        this.setBaseLayer();
        this.setHairLayer();
        this.setBeardLayer();
        //Equipment
        this.torso;
        this.pants;
        this.boots;
        this.hat;
        this.weapon;//left
        this.shield;//right
    }
    setBaseLayer() {
        //Validate options are present
        for (let i = 0; i < bases.length; i++) {
            if (this.race === bases[i].race && this.gender == bases[i].gender) {
                // console.log(bases[i])
                this.avatarSprite.base = allSpritesXL[bases[i].x][bases[i].y];//new Sprite(charSheet, bases[i].x, bases[i].y,0,0);
            }
        }
    }
    setHairLayer() {
        //Validate options are present
        for (let i = 0; i < hair.length; i++) {
            if (this.hair_style === hair[i].style && this.hair_color == hair[i].color) {
                this.avatarSprite.hair = allSpritesXL[hair[i].x][hair[i].y];//new Sprite(charSheet, hair[i].x, hair[i].y,0,0);
                // console.log(hair[i])
            }
        }
    }
    setBeardLayer() {
        //Validate presence of beard in array
        for (let i = 0; i < beard_layer.length; i++) {
            if (this.beard === beard_layer[i].beard && this.hair_color == beard_layer[i].color) {
                this.avatarSprite.beard = allSpritesXL[beard_layer[i].x][beard_layer[i].y];//new Sprite(charSheet, beard_layer[i].x, beard_layer[i].y, 0, 0);
                // console.log(beard_layer[i])
            }
        }
    }
}