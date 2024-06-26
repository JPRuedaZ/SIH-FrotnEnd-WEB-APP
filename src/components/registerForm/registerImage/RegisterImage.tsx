import Image from "next/image";

const RegisterImage: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full h-[600] max-[850px]:hidden">
      <Image
        className="w-full h-full object-cover"
        width={1000}
        height={600}
        src="/icons/registerFamily.png"
        alt="Secure Ingress Home"
      />
    </div>
  );
};
export default RegisterImage;
