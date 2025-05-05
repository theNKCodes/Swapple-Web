import { OrbitingCircles } from '@/components/orbiting-circles';

export function OrbitingCirclesDemo() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden'>
      <OrbitingCircles iconSize={40}>
        <img src='https://cdn-icons-png.flaticon.com/128/11592/11592350.png' alt='OpenAI' />
        <img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' alt='Google' />
        <img src='https://cdn-icons-png.flaticon.com/128/3128/3128296.png' alt='Yahoo' />
        <img src='https://capacity.com/wp-content/uploads/2021/02/clearbit.png' alt='Clearbit' />
        <img src='https://www.apollo.io/icon.svg?d2b599b6bf97c4ae' alt='Apollo AI' />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <img src='https://logos-world.net/wp-content/uploads/2024/02/Twilio-Emblem.png' alt='Twilio' />
        <img src='https://images.ctfassets.net/0zzq0trs0mvi/1GqlutZ7h6iMrMJ87dy3Sy/8e1cc9e8d0e2eb71b52f35883eae3062/61326bc720868c559b92f843_pdl_logo.jpg' alt='People Data Labs' />
        <img src='https://zorgle.co.uk/wp-content/uploads/2024/11/Azure-ai-logo.png' alt='Azure AI' />
        <img src='https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/aws.png' alt='AWS' />
      </OrbitingCircles>
    </div>
  );
}
