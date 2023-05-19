import { FunctionComponent } from 'react';
import plantProps from './Plant.interface';
import { useRouter } from 'next/router';
import { FaCircle, FaSkullCrossbones, FaUtensils, FaRegSun, FaRegMoon, FaLeaf, FaAppleAlt } from 'react-icons/fa';

interface IconProps {
  icon: any;
  enabled: boolean;
  tooltip: string;
}

const Plant: FunctionComponent<plantProps> = ({
  name,
  sciName,
  description,
  height,
  isPoisonous,
  isEatable,
  hasFlowers,
  produceFruits,
  isShadePlant,
  isSunPlant,
  imgSrc,
}) => {
  const router = useRouter();

  const icons: IconProps[] = [
    { icon: FaSkullCrossbones, enabled: isPoisonous, tooltip: isPoisonous ? 'Es venenoso' : 'No es venenoso' },
    { icon: FaUtensils, enabled: isEatable, tooltip: isEatable ? 'Es comestible' : 'No es comestible' },
    { icon: FaLeaf, enabled: hasFlowers, tooltip: hasFlowers ? 'Tiene flores' : 'No tiene flores' },
    { icon: FaAppleAlt, enabled: produceFruits, tooltip: produceFruits ? 'Produce frutas' : 'No produce frutas' },
    { icon: FaRegMoon, enabled: isShadePlant, tooltip: isShadePlant ? 'Es planta de sombra' : 'No es planta de sombra' },
    { icon: FaRegSun, enabled: isSunPlant, tooltip: isSunPlant ? 'Es planta de sol' : 'No es planta de sol' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="mt-12 bg-university-green rounded-r-lg text-white w-[90%] leading-6 py-1 shadow flex items-center space-x-2 h-12">
          <span className="text-lg font-slab font-bold ml-10">{name}</span>
          <span className="text-sm font-mono italic ml-10 items-left">-{sciName}</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="mt-5 bg-white rounded-full text-white w-[80%] leading-6 py-1 shadow flex items-center justify-between border border-[#A8A3A3] h-12 ml-4 mr-4">
          {icons.map(({ icon: Icon, enabled, tooltip }, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-8 h-8 rounded-full ml-5 mr-5 ${enabled ? 'bg-[#33691E]' : 'bg-[#FF5757]'}`}
              title={tooltip}
            >
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="mt-5 bg-white rounded-md text w-[90%] leading-6 py-1 shadow flex-col items-center space-x-2 border border-[#D8D3D3] ml-4 mr-4">
          <div style={{ marginTop: '10px', fontFamily: 'Roboto Mono', marginLeft: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Nombre comun: </span>
            {name}
          </div>
          <div style={{ marginTop: '10px', fontFamily: 'Roboto Mono' }}>
            <span style={{ fontWeight: 'bold' }}>Nombre cientifico: </span>
            {sciName}
          </div>
          <div style={{ marginTop: '10px', fontFamily: 'Roboto Mono' }}>
            <span style={{ fontWeight: 'bold' }}>Altura: </span>
            {height}
          </div>
          <br />
          <div style={{ marginTop: '10px', fontFamily: 'Roboto Mono' }}>
            <span style={{ fontWeight: 'bold' }}>Descripción: </span>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
