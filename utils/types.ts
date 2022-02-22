import { Moment } from 'moment';
import { GridColDef } from '@mui/x-data-grid';
export interface TabPanelProps {
  index: number;
  value: number;
}

export type faqSubGroupsTypes =
  | 'basics'
  | 'services'
  | 'payments'
  | 'changes'
  | 'info';

export type ServiceType = {
  id: number;
  name: string;
  price?: Array<number>;
  duration?: string;
  shortDescription: string;
  longDescription: string;
  images: Array<string>;
};

export type OrderDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  carYear: string;
  carMake: string;
  carModel: string;
  carColor?: string;
  vin?: string;
  transmission?: string;
  pickupDate: Moment;
  dropoffDate: Moment;
  customerComments?: string;
};

export type ServiceDatesType = {
  pickUpDate: Date;
  returnDate: Date;
};

export type CarMake = string;

export type CarModel = {
  Model: string;
  Category: string;
};

export type StateType = {
  cartItems: ServiceType[];
  modelCategories: CarModel[];
  shippingAddress: OrderDetailsType;
  carSize?: string;
};

export type ActionType = {
  type: string;
  payload: any;
};

export type aboutDetailsProps = {
  title: string;
  description: string;
  image: string;
};

export type AboutCardProps = {
  info: aboutDetailsProps;
};

export interface BgImageProps {
  alignItems?: string;
  imgalt: string;
  imgsrc: string;
  height?: string;
  justifyContent?: string;
  width?: string;
}

export interface BgImageContainerProps {
  alignItems: string;
  justifyContent: string;
  height: string;
  width: string;
}

export interface ServiceObject {
  serviceObject: ServiceType;
}

export interface customTableProps {
  columns: GridColDef[];
  cartItemsArray: Array<ServiceType>;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  serviceDetails: ServiceType;
}

export interface ServicesDataType {
  category: string;
  services: Array<ServiceType>;
}

export type yelpCommentType = {
  language: string;
  text: string;
};

export type yelpUserType = {
  altText: string;
  displayLocation: string;
  eliteYear?: number;
  friendCount?: number;
  link: string;
  markupDisplayName: string;
  partnerAlias?: string;
  photoCount?: number;
  reviewCount?: number;
  src: string;
  srcSet: string;
  userUrl: string;
};

export type yelpReviewType = {
  appreciatedBy?: string;
  business: object;
  businessOwnerReplies?: [];
  comment: yelpCommentType;
  feedback: object;
  id: string;
  isUpdated: boolean;
  lightboxMediaItems: [];
  localizedDate: string;
  localizedDateVisited?: string;
  photos?: [];
  photosUrl: string;
  previousReviews?: [];
  rating: number;
  tags: [];
  totalPhotos?: number;
  user: yelpUserType;
  userId: string;
};
