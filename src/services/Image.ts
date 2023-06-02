import { storage } from "@config/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

type AnimalPhoto = {
    name: string;
    url: string;
}

export async function getAll() {
    const list: any[] = [];

    const imagesFolder = ref(storage, "icons/");

    const photoList = await listAll(imagesFolder);

    photoList.items.map(async (image) => {
        const url = await getDownloadURL(image);

        list.push({
            name: image.name,
            url
        });
    });

    return list;
}

export async function getImageByName(name: string) {
//todo: get image by name
}