import { Transfer as CovenTransferEvent } from "../generated/CryptoCoven/CryptoCoven";
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer,
} from "../generated/schema";

export function handleTransfer(event: CovenTransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
