import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/realtime', cors: true })
export class SocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  private name = 'SocketGateway';
  private logger = new Logger(SocketGateway.name);

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.logger.log(`Socket initialized at /realtime`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${JSON.stringify(client)}`);
  }
  handleDisconnect(client: Socket, ...args: any[]) {
    this.logger.log(`Client disconnected: ${JSON.stringify(client)}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): void {
    this.logger.log(
      `Message received from ${JSON.stringify(client)}: ${JSON.stringify(
        payload,
      )}`,
    );
  }
}
