import ProductService from '../../../../../api/product-service';
import { TabView, TabPanel } from 'primereact/tabview';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../../../../../hooks/useRequest';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IPriceHistory } from 'apps/react-sb/src/app/types/product';
import { PriceHistoryEventType } from 'apps/react-sb/src/app/types/profile';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

function ProductHistory() {
  const params = useParams();
  const [productHistory, setProductHistory] = useState<any>();
  const [filter, setFilter] = useState<{
    [PriceHistoryEventType.TRANSFER]: boolean;
    [PriceHistoryEventType.PURCHASE]: boolean;
    [PriceHistoryEventType.BIDS]: boolean;
    [PriceHistoryEventType.LISTING]: boolean;
  }>({
    [PriceHistoryEventType.TRANSFER]: false,
    [PriceHistoryEventType.PURCHASE]: false,
    [PriceHistoryEventType.BIDS]: false,
    [PriceHistoryEventType.LISTING]: false,
  });
  const [filterSelected, setFilterSelected] = useState<boolean>(false);
  const [fetchProductHistory, isProductLoading, productError] = useFetching(
    async (id: string, neededType: Array<PriceHistoryEventType> = []) => {
      const response = await ProductService.getProductById(parseInt(id, 10), neededType);
      setProductHistory(response);
    }
  );

  useEffect(() => {
    const availableFilters = Object.keys(PriceHistoryEventType).map(filterKey => filterKey as PriceHistoryEventType).filter(filterKey => filter[filterKey]);
    setFilterSelected(availableFilters?.length > 0);
    if (params['productId']) {
      fetchProductHistory(params['productId'], availableFilters);
    }
    
  }, [params, filter]);

  const priceTemplate = (rowData: IPriceHistory) => {
    return (
      <div>
        {rowData.price ? `${rowData.price} ${rowData.currency}` : '---'}
      </div>
    );
  };

  const dateTemplate = (rowData: IPriceHistory) => {
    return (
      <div>
        {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }).format(new Date(rowData.date))}
      </div>
    );
  };

  const eventTypeTemplate = (rowData: IPriceHistory) => {
    switch (rowData.type) {
      case PriceHistoryEventType.BIDS:
        return (
          <div>
            <span>
              <i className="pi pi-dollar text-sm"></i>
            </span>
            <span className="pl-3">Bids</span>
          </div>
        );
      case PriceHistoryEventType.TRANSFER:
        return (
          <div>
            <span>
              <i
                className="pi pi-sort-alt text-sm"
                style={{ transform: 'rotate(90deg)' }}
              ></i>
            </span>
            <span className="pl-3">Transfer</span>
          </div>
        );
      case PriceHistoryEventType.LISTING:
        return (
          <div>
            <span>
              <i className="pi pi-dollar text-sm"></i>
            </span>
            <span className="pl-3">Listing</span>
          </div>
        );
      default:
        return (
          <div>
            <span>
              <i className="pi pi-shopping-cart text-sm"></i>
            </span>
            <span className="pl-3">Purchase</span>
          </div>
        );
    }
  };

  const stabilityTemplate = (rowData: IPriceHistory) => {
    return (
      <div>
        {rowData.stability ? (
          <div>
            <span className="pr-2">{rowData.stability}</span>{' '}
            <span>
              <i
                className={`pi ${
                  rowData.stability > 0 ? 'pi-caret-up' : 'pi-caret-down'
                } text-sm`}
              ></i>
            </span>
          </div>
        ) : (
          '---'
        )}
      </div>
    );
  };

  const changeFilter = (key: PriceHistoryEventType): void => {
    setFilter({...filter, [key]: !filter[key]})

  }

  const headerTemplate = () => {
    return (
      <div className="flex flex-row justify-content-start align-items-center">
        <Button
          aria-label="Filter"
          className="p-button-rounded p-button-secondary"
        >
          <span className="px-3">Filter</span>
        </Button>
        <div className="flex flex-row align-items-center pl-8">
          <InputSwitch checked={filter.TRANSFER} onChange={() => changeFilter(PriceHistoryEventType.TRANSFER)}/>
          <span className="pl-2">Transfer</span>
        </div>
        <div className="flex flex-row align-items-center pl-8">
          <InputSwitch checked={filter?.PURCHASE} onChange={() => changeFilter(PriceHistoryEventType.PURCHASE)}/>
          <span className="pl-2">Purchase</span>
        </div>
        <div className="flex flex-row align-items-center pl-8">
          <InputSwitch checked={filter?.BIDS} onChange={() => changeFilter(PriceHistoryEventType.BIDS)}/>
          <span className="pl-2">Bids</span>
        </div>
        <div className="flex flex-row align-items-center pl-8">
          <InputSwitch checked={filter?.LISTING} onChange={() => changeFilter(PriceHistoryEventType.LISTING)}/>
          <span className="pl-2">Listing</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TabView className="product-details-table">
        <TabPanel header="Provenance">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel header="Price History">
          <DataTable
            value={productHistory}
            header={headerTemplate}
            responsiveLayout="scroll"
          >
            <Column
              field="type"
              header="Event type"
              body={eventTypeTemplate}
            ></Column>
            <Column field="price" body={priceTemplate} header="Price"></Column>
            <Column
              field="stability"
              header="Stability"
              body={stabilityTemplate}
            ></Column>
            <Column field="seller" header="Seller"></Column>
            <Column field="buyer" header="Buyer"></Column>
            <Column field="date" header="Date" body={dateTemplate}></Column>
          </DataTable>
        </TabPanel>
        <TabPanel header="Properties">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
        <TabPanel header="Details">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
        <TabPanel header="About Seller">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default ProductHistory;
