import Host2HostService from './Host2Host';
import ZetpayService from './Zetpay';

const services = {
  zetpay: new ZetpayService(process.env.ZETPAY_URI as string),
  host2host: new Host2HostService(process.env.ZETPAY_H2H_URI as string)
};

export default services;
