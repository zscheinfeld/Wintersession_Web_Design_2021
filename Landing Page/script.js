//variables for setup 

let container; 
let camera;
let renderer;
let scene;
let object;

function init(){
    container = document.querySelector('.scene');

    // Create scene
    scene = new THREE.Scene();

    const fov= 35;
    const aspect =container.clientWidth / container.clientHeight;
    const near= 0.1;
    const far = 500;


    //Camera
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far)
    camera.position.set(0,0,100);

    const ambient = new THREE.AmbientLight(0x404040,5);
    scene.add(ambient);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Load Model
    const loader= new THREE.GLTFLoader();
    loader.load("./3D/Window.gltf" , function (gltf) {
            scene.add(gltf.scene);
            renderer.render(scene, camera);
            console.log(gltf)
        
    });

}

init();




