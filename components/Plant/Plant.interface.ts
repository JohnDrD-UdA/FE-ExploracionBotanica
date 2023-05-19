export default interface plantProps {
    name: string;
    sciName: string;
    description: string;
    height?: number;
    isPoisonous?: boolean;
    isEatable?: boolean;
    hasFlowers?: boolean;
    produceFruits?: boolean;
    isShadePlant?: boolean;
    isSunPlant?: boolean;
    imgSrc?: string;
  }
  