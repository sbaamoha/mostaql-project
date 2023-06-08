type RouteType = {
  path: string;
  component: () => JSX.Element;
};

type RoutesType = RouteType[];

interface LinkType {
  url: string;
  name: string;
  img: string;
}
type InformationType = {
  name: string;
  checked: boolean;
};
type MostacharInfosType = {
  value: string;
  icon: string;
};
type CartType = {
  name: string;
  number: string;
};
