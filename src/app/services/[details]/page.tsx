
'use client'
import ToothFilling from "@/components/Details/tooth-filling";
import { useParams } from 'next/navigation'

const Details = () => {
  const params = useParams<{ details: string }>();
  console.log(params?.details);

  switch(params.details){
    case 'tooth-filling':
      return (
        <ToothFilling/>
      )
  }
};

export default Details;
