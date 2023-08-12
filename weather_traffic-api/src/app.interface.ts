

export interface area {
    name: string,
    weather:string,
    img:string
  }

  export interface requestAea {
  
      timestamp: string,
      image: string,
      location: {
        latitude: bigint,
        longitude: bigint
      },
      camera_id: string,
      image_metadata: {
        height: number,
        width: number,
        md5: string
      }
    
  }

 