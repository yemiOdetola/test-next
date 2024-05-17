import Image from "next/image";
import { Button } from "@/components/ui";
import { DashboardLayout } from "@/components/layout";

const products = [
  {
    id: "1",
    title: "Avlon Affirm 5 In 1 Reconstructor 32oz + Normalizing Shampoo",
    img: "/images/products/0.png",
    from: {
      icon: "/images/logo/amazon.png",
      site: "Amazon",
    },
    repayment: "Repayment Phase 2 of 3",
    price: "$300.00",
    due: "Payment due 23 May, 2024 (8 Days)",
  },
  {
    id: "2",
    title: "1 TWIN STANDARD-BED AND BREAKFAST",
    img: "/images/products/1.png",
    from: {
      icon: "/images/logo/ikanopii.png",
      site: "iKanopii",
    },
    repayment: "Repayment Phase 2 of 3",
    price: "$255.00",
    due: "Payment due 23 May, 2024 (8 Days)",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex items-center">
        <h1 className="text-lg md:text-xl">Hello, Opeyemi</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-10">
          {products.map((product, index) => (
            <div
              className="w-[284px] p-1 py-3 border border-[#eaeaea] rounded-xl"
              key={index}
            >
              <div className="w-full p-4 mb-2">
                <Image
                  src={product.img}
                  width={260}
                  height={260}
                  alt={product.title}
                  className="mb-1"
                />
              </div>
              <div className="px-2">
                <div className="flex mb-2 w-full items-center justify-start">
                  <Image
                    src={product.from.icon}
                    width={20}
                    height={20}
                    alt={product.from.site}
                    className="mr-2"
                  />
                  <span className="text-xs text-muted">
                    {product.from.site}
                  </span>
                </div>
                <h3 className="text-normal font-semibold text-black">
                  {product.title}
                </h3>
                <div className="my-4">
                  <div className="flex">
                    <span className="text-xs text-primary font-medium">
                      {product.repayment}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium">{product.price}</h3>
                  <span className="text-xs text-muted">{product.due}</span>
                </div>
                <Button variant="destructive" className="w-full">
                  Repay Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[400px] w-full bg-gray-200 rounded-2xl my-14"></div>
      </div>
    </DashboardLayout>
  );
}
