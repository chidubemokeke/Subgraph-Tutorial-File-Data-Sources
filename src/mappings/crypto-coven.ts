import { Transfer as TokenTransferEvent } from "../../generated/CryptoCoven/CryptoCoven";
import { Account, Token } from "../../generated/schema";

export function handleTransfer(event: TokenTransferEvent): void {
  let entity = new Token(
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
