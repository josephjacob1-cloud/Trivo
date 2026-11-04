"""add package travel information columns

Revision ID: 578114bdb4be
Revises: 7b0e08049005
Create Date: 2026-11-04 13:12:55.767158

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '578114bdb4be'
down_revision: Union[str, Sequence[str], None] = '7b0e08049005'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column(
        'packages',
        sa.Column('languages', postgresql.ARRAY(sa.String()), nullable=True)
    )
    op.add_column(
        'packages',
        sa.Column('meetingPoint', sa.String(length=255), nullable=True)
    )
    op.add_column(
        'packages',
        sa.Column('tourType', sa.String(length=100), nullable=True)
    )
    op.add_column(
        'packages',
        sa.Column('maxGuests', sa.Integer(), nullable=True)
    )
    op.add_column(
        'packages',
        sa.Column('minimumAge', sa.Integer(), nullable=True)
    )
    op.add_column(
        'packages',
        sa.Column('cancellationPolicy', sa.Text(), nullable=True)
    )



def downgrade():
    op.drop_column('packages', 'cancellationPolicy')
    op.drop_column('packages', 'minimumAge')
    op.drop_column('packages', 'maxGuests')
    op.drop_column('packages', 'tourType')
    op.drop_column('packages', 'meetingPoint')
    op.drop_column('packages', 'languages')
