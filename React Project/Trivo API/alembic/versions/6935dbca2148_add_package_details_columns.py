"""add package details columns

Revision ID: 6935dbca2148
Revises: 04c6509e3091
Create Date: 2026-11-01 15:32:24.782528

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '6935dbca2148'
down_revision: Union[str, Sequence[str], None] = '04c6509e3091'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.add_column(
        'packages',
        sa.Column('highlights', sa.ARRAY(sa.String()), nullable=True)
    )

    op.add_column(
        'packages',
        sa.Column('itinerary', postgresql.JSONB(), nullable=True)
    )

    op.add_column(
        'packages',
        sa.Column('inclusions', sa.ARRAY(sa.String()), nullable=True)
    )

    op.add_column(
        'packages',
        sa.Column('exclusions', sa.ARRAY(sa.String()), nullable=True)
    )

    op.add_column(
        'packages',
        sa.Column('hotel', sa.ARRAY(sa.String()), nullable=True)
    )

    op.add_column(
        'packages',
        sa.Column('transport', sa.ARRAY(sa.String()), nullable=True)
    )

def downgrade() -> None:
    op.drop_column('packages', 'transport')
    op.drop_column('packages', 'hotel')
    op.drop_column('packages', 'exclusions')
    op.drop_column('packages', 'inclusions')
    op.drop_column('packages', 'itinerary')
    op.drop_column('packages', 'highlights')