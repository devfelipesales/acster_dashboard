import { Fonts } from "@/app/UI/fonts";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

type IHeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

export function Card({
  icon,
  title,
  value,
}: {
  icon: IHeroIcon;
  title: string;
  value: string;
}) {
  const Icon = icon;
  return (
    <div className="rounded-md bg-emerald-50 p-3">
      <div>
        <div className="flex items-center gap-1 py-3">
          <Icon className="w-5" />
          <p className="text-sm font-semibold xs:text-base">{title}</p>
        </div>
        <div className="rounded-lg bg-white px-4 py-8 text-center">
          <p className={`${Fonts.lusitana.className} text-xl xs:text-2xl`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CardWrapper() {
  return (
    <div className="mt-4 grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
      <Card icon={BanknotesIcon} title="Vendas" value="R$ 50.000" />
      <Card icon={ClockIcon} title="Processando" value="R$ 15.000" />
      <Card icon={InboxIcon} title="Total de Vendas" value="55" />
      <Card icon={UserGroupIcon} title="Total de Clientes" value="10" />
    </div>
  );
}
